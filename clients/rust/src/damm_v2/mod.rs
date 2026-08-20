//! DammV2 API client.
//!
//! Prefer [`DammV2Api`] over calling generated API modules directly.

#![allow(clippy::too_many_arguments)]

mod client;
mod config;
mod generated_impls;

pub use client::{DammV2Api, Pools, Stats};
pub use config::DammV2ApiOptions;

/// Generated APIs and models.
pub use meteora_damm_v2_api_generated::{self as generated, apis::Error, models};
