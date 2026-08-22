# Changesets

Use Changesets to record user-facing changes to `packages/meteora-api`. Run `bun run
changeset`, choose the appropriate semantic-version bump, and describe the
consumer-visible change. Do not add a changeset for tooling-only changes.

Rust changesets for `meteora-api` are managed separately by
`cargo-changeset` in `.changeset/changesets/`. Use `just changeset` to add one;
do not create Rust changeset files beside this README.
