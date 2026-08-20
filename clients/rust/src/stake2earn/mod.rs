//! Stake2Earn API client.
//!
//! Prefer [`Stake2EarnApi`] over calling generated API modules directly.

#![allow(clippy::too_many_arguments)]

mod client;
mod config;
mod generated_impls;

pub use client::{Stake2EarnApi, Analytics, Vault};
pub use config::Stake2EarnApiOptions;

/// Generated APIs and models.
pub use meteora_stake2earn_api_generated::{self as generated, apis::Error, models};
