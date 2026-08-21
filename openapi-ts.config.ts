import { defineConfig } from "@hey-api/openapi-ts";

function nestByTags(containerName: string, tags: Record<string, readonly string[]>) {
  return (operation: { method: string; operationId?: string; tags?: readonly string[] }) => {
    const tag = operation.tags?.[0];
    const path = tag === undefined ? undefined : tags[tag];

    if (path === undefined) {
      throw new TypeError(`Unsupported ${containerName} operation tag: ${tag ?? "none"}`);
    }

    return [...path, operation.operationId ?? operation.method.toLowerCase()];
  };
}

export default defineConfig([
  {
    input: "./openapi/dlmm/openapi.json",
    output: "generated/ts/dlmm",
    plugins: [
      "@hey-api/client-fetch",
      {
        name: "@hey-api/sdk",
        operations: {
          containerName: "DlmmApi",
          nesting: nestByTags("DlmmApi", {
            "Limit Orders": ["limitOrders"],
            Pools: ["pools"],
            Portfolio: ["portfolio"],
            Positions: ["positions"],
            Stats: ["stats"],
            Wallets: ["wallets"],
          }),
          strategy: "single",
        },
      },
    ],
  },
  {
    input: "./openapi/damm-v1/openapi.json",
    output: "generated/ts/damm-v1",
    plugins: [
      "@hey-api/client-fetch",
      {
        name: "@hey-api/sdk",
        operations: {
          containerName: "DammV1Api",
          nesting: nestByTags("DammV1Api", {
            "Alpha Vault": ["alphaVault"],
            "Fee Configs": ["feeConfigs"],
            Pools: ["pools"],
          }),
          strategy: "single",
        },
      },
    ],
  },
  {
    input: "./openapi/damm-v2/openapi.json",
    output: "generated/ts/damm-v2",
    plugins: [
      "@hey-api/client-fetch",
      {
        name: "@hey-api/sdk",
        operations: {
          containerName: "DammV2Api",
          nesting: nestByTags("DammV2Api", {
            Pools: ["pools"],
            Stats: ["stats"],
          }),
          strategy: "single",
        },
      },
    ],
  },
  {
    input: "./openapi/dynamic-vault/openapi.json",
    output: "generated/ts/dynamic-vault",
    plugins: [
      "@hey-api/client-fetch",
      {
        name: "@hey-api/sdk",
        operations: {
          containerName: "DynamicVaultApi",
          nesting: nestByTags("DynamicVaultApi", {
            APY: ["apy"],
            Vaults: ["vaults"],
            "Virtual Price": ["virtualPrice"],
          }),
          strategy: "single",
        },
      },
    ],
  },
  {
    input: "./openapi/stake2earn/openapi.json",
    output: "generated/ts/stake2earn",
    plugins: [
      "@hey-api/client-fetch",
      {
        name: "@hey-api/sdk",
        operations: {
          containerName: "Stake2EarnApi",
          nesting: nestByTags("Stake2EarnApi", {
            analytics: ["analytics"],
            vault: ["vaults"],
          }),
          strategy: "single",
        },
      },
    ],
  },
]);
