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
const pools = await dlmm.pools.getPools({});
```

The available clients are:

- `DlmmApi`
- `DammV1Api`
- `DammV2Api`
- `DynamicVaultApi`
- `Stake2EarnApi`

Every client uses its product's production base URL by default.

Generated API classes and models are also exported under product-specific
namespaces such as `DlmmGenerated` and `DammV2Generated`.

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

`prepare-openapi` normalizes the upstream OpenAPI 3.1 documents into the
temporary, ignored `.openapi/` directory. This is required because the current
TypeScript fetch generator expects the nullable schemas in OpenAPI 3.0 form.
The source documents under `openapi/` are not modified.

To add a new OpenAPI specification to the client:

1. Add the source document under `openapi/<product>/openapi.json`.
2. Add normalization and generator scripts for the product in `package.json`.
3. Add the product's default base URL and a standalone client class under
   `clients/ts/`.
4. Export the client and generated namespace from `clients/ts/index.ts`.
5. Run the validation commands below before committing the change.

Use these commands during development:

```bash
# Normalize source specifications into the generator inputs.
bun run prepare-openapi

# Generate all product-specific TypeScript clients.
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
