//! DynamicVault API client.
//!
//! Prefer [`DynamicVaultApi`] over calling generated API modules directly.

#![allow(clippy::too_many_arguments)]

mod client;
mod config;
mod generated_impls;

pub use client::{DynamicVaultApi, Apy, Vaults, VirtualPrice};
pub use config::DynamicVaultApiOptions;

/// Generated APIs and models.
pub use meteora_dynamic_vault_api_generated::{self as generated, apis::Error, models};
