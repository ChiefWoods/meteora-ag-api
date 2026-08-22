# Format all Cargo workspace members.
fmt:
    cargo fmt --all

# Type-check all Cargo workspace members.
check:
    cargo check --workspace

# Compile all Cargo workspace members.
build:
    cargo build --workspace

# Add an interactive Rust changeset for a publishable crate change.
changeset:
    cargo changeset add

# Show pending Rust changesets and their projected versions.
changeset-status:
    cargo changeset status

# Apply pending Rust changesets, updating crate versions and changelogs.
release:
    cargo changeset release

# Generate all openapi-to-rust clients from the checked-in specifications.
openapi-gen:
    openapi-to-rust generate --config openapi-to-rust.dlmm.toml
    openapi-to-rust generate --config openapi-to-rust.damm-v1.toml
    openapi-to-rust generate --config openapi-to-rust.damm-v2.toml
    openapi-to-rust generate --config openapi-to-rust.dynamic-vault.toml
    openapi-to-rust generate --config openapi-to-rust.stake2earn.toml
    cargo fmt --all

# Regenerate all Rust clients.
generate: openapi-gen
