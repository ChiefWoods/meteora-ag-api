type JsonObject = { [key: string]: JsonValue };
type JsonValue = boolean | JsonObject | JsonValue[] | null | number | string;

function isJsonObject(value: JsonValue): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeValue(value: JsonValue): JsonValue {
  if (Array.isArray(value)) {
    return value.map(normalizeValue);
  }

  if (!isJsonObject(value)) {
    return value;
  }

  const normalized = Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, normalizeValue(item)]),
  ) as JsonObject;

  if (Array.isArray(normalized.type) && normalized.type.includes("null")) {
    const nonNullTypes = normalized.type.filter((type): type is string => type !== "null");

    const type = nonNullTypes[0];
    if (type !== undefined && nonNullTypes.length === 1) {
      normalized.type = type;
      normalized.nullable = true;
    }
  }

  return normalized;
}

export function normalizeOpenApiDocument(document: JsonObject): JsonObject {
  const normalized = normalizeValue(document) as JsonObject;

  if (normalized.openapi === "3.1.0") {
    normalized.openapi = "3.0.3";
  }

  return normalized;
}

async function normalizeFile(inputPath: string, outputPath: string): Promise<void> {
  const document = JSON.parse(await Bun.file(inputPath).text()) as JsonObject;
  await Bun.write(outputPath, `${JSON.stringify(normalizeOpenApiDocument(document), null, 2)}\n`);
}

if (import.meta.main) {
  const [inputPath, outputPath] = Bun.argv.slice(2);

  if (inputPath === undefined || outputPath === undefined) {
    throw new TypeError("Usage: bun run scripts/normalize-openapi.ts <input-path> <output-path>");
  }

  await normalizeFile(inputPath, outputPath);
}
