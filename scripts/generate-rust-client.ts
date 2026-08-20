import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";

type Product = {
  defaultBaseUrl: string;
  generatedCrateName: string;
  name: string;
};

const PRODUCTS: Record<string, Product> = {
  "damm-v1": {
    defaultBaseUrl: "https://damm-api.meteora.ag",
    generatedCrateName: "meteora-damm-v1-api-generated",
    name: "DammV1",
  },
  "damm-v2": {
    defaultBaseUrl: "https://damm-v2.datapi.meteora.ag",
    generatedCrateName: "meteora-damm-v2-api-generated",
    name: "DammV2",
  },
  dlmm: {
    defaultBaseUrl: "https://dlmm.datapi.meteora.ag",
    generatedCrateName: "meteora-dlmm-api-generated",
    name: "Dlmm",
  },
  "dynamic-vault": {
    defaultBaseUrl: "https://merv2-api.meteora.ag",
    generatedCrateName: "meteora-dynamic-vault-api-generated",
    name: "DynamicVault",
  },
  stake2earn: {
    defaultBaseUrl: "https://stake-for-fee-api.meteora.ag",
    generatedCrateName: "meteora-stake2earn-api-generated",
    name: "Stake2Earn",
  },
};

const productKey = Bun.argv[2];
const product = productKey === undefined ? undefined : PRODUCTS[productKey];

if (product === undefined || productKey === undefined) {
  throw new TypeError(`Expected one product: ${Object.keys(PRODUCTS).join(", ")}`);
}

const root = join(import.meta.dir, "..");
const generatedRoot = join(root, "generated/rust", productKey);
const clientRoot = join(root, "clients/rust");
const productModuleName = productKey.replaceAll("-", "_");
const moduleRoot = join(clientRoot, "src", productModuleName);
const apiDirectory = join(generatedRoot, "src/apis");
const generatedCrateIdent = product.generatedCrateName.replaceAll("-", "_");
const clientName = `${product.name}Api`;
const optionsName = `${clientName}Options`;

await mkdir(moduleRoot, { recursive: true });

function pascalCase(value: string): string {
  return value
    .split("_")
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase()}${part.slice(1)}`)
    .join("");
}

function fieldName(moduleName: string): string {
  return moduleName.replace(/_api$/, "");
}

const modules = (await readdir(apiDirectory))
  .filter((file) => file.endsWith("_api.rs"))
  .map((file) => file.slice(0, -3))
  .sort((left, right) => left.localeCompare(right));

if (modules.length === 0) {
  throw new TypeError(`No generated API modules found in ${apiDirectory}`);
}

const apiTypes = modules.map((moduleName) => ({
  field: fieldName(moduleName),
  moduleName,
  type: pascalCase(fieldName(moduleName)),
}));

function splitParams(params: string): string[] {
  const parts: string[] = [];
  let current = "";
  let depth = 0;

  for (const character of params) {
    if (character === "<" || character === "(") depth += 1;
    if (character === ">" || character === ")") depth -= 1;
    if (character === "," && depth === 0) {
      if (current.trim()) parts.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

const functionPattern =
  /^pub async fn ([a-z0-9_]+)\(configuration: &configuration::Configuration,?\s*(.*)\) -> (.+) \{$/;

const implementations: string[] = [];
for (const api of apiTypes) {
  const apiPath = join(apiDirectory, `${api.moduleName}.rs`);
  let source = await Bun.file(apiPath).text();
  const fixedSource = source.replaceAll("models::models::", "models::");

  if (fixedSource !== source) {
    await Bun.write(apiPath, fixedSource);
    source = fixedSource;
  }
  const methods: string[] = [];

  for (const line of source.split(/\r?\n/)) {
    const match = line.match(functionPattern);
    if (match === null || match[1] === undefined || match[3] === undefined) continue;

    const params = splitParams(match[2] ?? "").map((param) => {
      const separator = param.indexOf(":");
      if (separator === -1) throw new TypeError(`Invalid generated parameter: ${param}`);
      return { name: param.slice(0, separator).trim(), type: param.slice(separator + 1).trim() };
    });
    const signature = params.map((param) => `, ${param.name}: ${param.type}`).join("");
    const args = ["&self.config", ...params.map((param) => param.name)].join(", ");
    const returnType = match[3].replace(/Error<(\w+)>/g, `Error<${api.moduleName}::$1>`);
    methods.push(
      `    #[allow(clippy::too_many_arguments)]\n    pub async fn ${match[1]}(&self${signature}) -> ${returnType} {\n        ${api.moduleName}::${match[1]}(${args}).await\n    }`,
    );
  }

  if (methods.length === 0)
    throw new TypeError(`No generated API functions found in ${api.moduleName}`);
  implementations.push(`impl ${api.type} {\n${methods.join("\n\n")}\n}`);
}

await Bun.write(
  join(moduleRoot, "client.rs"),
  `use ${generatedCrateIdent}::apis::configuration::Configuration;\n\nuse crate::${productModuleName}::config::{create_configuration, ${optionsName}};\n\nmacro_rules! api_client {\n    ($name:ident) => {\n        #[derive(Clone, Debug)]\n        pub struct $name {\n            pub(crate) config: Configuration,\n        }\n    };\n}\n\n${apiTypes.map((api) => `api_client!(${api.type});`).join("\n")}\n\n/// Typed access to ${product.name} APIs.\n#[derive(Clone, Debug)]\npub struct ${clientName} {\n${apiTypes.map((api) => `    pub ${api.field}: ${api.type},`).join("\n")}\n}\n\nimpl ${clientName} {\n    pub fn new(options: ${optionsName}) -> Self {\n        Self {\n${apiTypes.map((api) => `            ${api.field}: ${api.type} { config: create_configuration(&options) },`).join("\n")}\n        }\n    }\n}\n\nimpl Default for ${clientName} {\n    fn default() -> Self {\n        Self::new(${optionsName}::default())\n    }\n}\n`,
);

await Bun.write(
  join(moduleRoot, "config.rs"),
  `use ${generatedCrateIdent}::apis::configuration::Configuration;\n\n/// Options shared by every generated ${product.name} API.\n#[derive(Clone, Debug, Default)]\npub struct ${optionsName} {\n    /// Override the product API's default base URL.\n    pub base_url: Option<String>,\n    /// reqwest client used by every generated API call.\n    pub client: Option<reqwest::Client>,\n}\n\npub(crate) fn create_configuration(options: &${optionsName}) -> Configuration {\n    let base_path = options.base_url.as_deref().unwrap_or("${product.defaultBaseUrl}");\n\n    if base_path.trim().is_empty() {\n        panic!("base_url must not be blank");\n    }\n\n    let mut configuration = Configuration::new();\n    configuration.base_path = base_path.to_owned();\n\n    if let Some(client) = &options.client {\n        configuration.client = client.clone();\n    }\n\n    configuration\n}\n`,
);

await Bun.write(
  join(moduleRoot, "generated_impls.rs"),
  `// This file is generated by scripts/generate-rust-client.ts. Do not edit.\n\n#![allow(deprecated)]\n\nuse crate::${productModuleName}::client::*;\nuse ${generatedCrateIdent}::apis::{\n    ${modules.join(",\n    ")},\n};\nuse ${generatedCrateIdent}::apis::Error;\nuse ${generatedCrateIdent}::models;\n\n${implementations.join("\n\n")}\n`,
);

await Bun.write(
  join(moduleRoot, "mod.rs"),
  `//! ${product.name} API client.\n//!\n//! Prefer [\`${clientName}\`] over calling generated API modules directly.\n\n#![allow(clippy::too_many_arguments)]\n\nmod client;\nmod config;\nmod generated_impls;\n\npub use client::{${clientName}, ${apiTypes.map((api) => api.type).join(", ")}};\npub use config::${optionsName};\n\n/// Generated APIs and models.\npub use ${generatedCrateIdent}::{self as generated, apis::Error, models};\n`,
);

console.log(`Generated Rust wrapper for ${productKey}.`);
