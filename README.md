# Meteora API Client

[![npm version](https://img.shields.io/npm/v/meteora-api)](https://www.npmjs.com/package/meteora-api)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Developing](#developing)

## Installation

Install the package:

```bash
bun add meteora-api
```

## Usage

Each Meteora product has its own client class because its API is served from an
independent base URL. Instantiate only the client for the product you need:

```ts
import { DlmmApi } from "meteora-api";

const dlmm = new DlmmApi();
const { data, error } = await dlmm.pools.getPools();
```

Override the default host, headers, or fetch implementation by passing a
product-specific client:

```ts
import { DlmmApi, createDlmmApiClient } from "meteora-api";

const dlmm = new DlmmApi({
  client: createDlmmApiClient({
    baseUrl: "https://dlmm.datapi.meteora.ag",
    headers: {
      "x-custom-header": "value",
    },
  }),
});
```

The available clients are:

- `DlmmApi` with `createDlmmApiClient`
- `DammV1Api` with `createDammV1ApiClient`
- `DammV2Api` with `createDammV2ApiClient`
- `DynamicVaultApi` with `createDynamicVaultApiClient`
- `Stake2EarnApi` with `createStake2EarnApiClient`

Every client uses its product's production base URL by default. Generated
request and response types are exported under product-specific namespaces such
as `DlmmApiTypes` and `DammV2ApiTypes`.

### Why class-based SDKs?

This package intentionally uses Hey API's class-based, nested SDK generation.
Each product class mirrors that API's tagged resources (`pools`, `limitOrders`,
and so on), making endpoints discoverable and keeping products isolated even
when their OpenAPI operation names overlap.

## Developing

This repository uses Bun. Install its dependencies with:

```bash
bun install
```

### OpenAPI generation

The version-controlled source specifications live under `openapi/`, organized
by Meteora product. Because each product has its own API origin and may define
overlapping operation names, each specification generates into its own
directory and is exposed through its own client class.

To add a new OpenAPI specification to the client:

1. Add the source document under `openapi/<product>/openapi.json`.
2. Add a Hey API generation target in `openapi-ts.config.ts` with the product
   tag paths and SDK class name. A new host requires a separately named SDK
   class.
3. Export the generated class, client factory, and types from `src/index.ts`.
4. Run `bun run generate` to rebuild the typed clients under `generated/`.
5. Run the validation commands below before committing the change.

Use these commands during development:

```bash
# Generate from the existing source specifications.
bun run openapi-gen

# Clean generated output and generate the client.
bun run generate

# Apply lint fixes and verify formatting.
bun run lint
bun run format:check

# Type-check source and generated clients.
bun run typecheck

# Regenerate and compile the published ESM, CJS, and declaration output.
bun run build
```

### Releases

Create a changeset for a publishable change and apply the version locally:

```bash
bun run changeset
bun run version
```

Commit the version changes, then create and push a `v*` tag for that version.
The publish workflow builds the package and publishes it to npm using npm trusted
publishing; no local `release` command is needed.
