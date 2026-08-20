//! DammV1 API client.
//!
//! Prefer [`DammV1Api`] over calling generated API modules directly.

#![allow(clippy::too_many_arguments)]

mod client;
mod config;
mod generated_impls;

pub use client::{DammV1Api, AlphaVault, FeeConfigs, Pools};
pub use config::DammV1ApiOptions;

/// Generated APIs and models.
pub use meteora_damm_v1_api_generated::{self as generated, apis::Error, models};
