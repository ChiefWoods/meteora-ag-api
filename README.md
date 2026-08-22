# Meteora API Clients

Generated client libraries for Meteora APIs.

## Packages

| Package | Language | Version |
| --- | --- | --- |
| [`meteora-api`](packages/meteora-api/README.md) | TypeScript | [![npm version](https://img.shields.io/npm/v/meteora-api)](https://www.npmjs.com/package/meteora-api) |
| [`meteora-api`](crates/meteora-api/README.md) | Rust | [![crates.io version](https://img.shields.io/crates/v/meteora-api)](https://crates.io/crates/meteora-api) |

Each package README contains its installation, usage, development, and release
instructions.

## Repository development

The version-controlled source OpenAPI specifications live under `openapi/`.
Each product specification is shared by the TypeScript and Rust client
generators.

Install repository dependencies with Bun:

```bash
bun install
```

The root is a Bun package for the npm client and a Cargo workspace for Rust
crates. Language-specific source, generated output, package metadata, and
changelogs live with their respective packages.
