//! Dlmm API client.
//!
//! Prefer [`DlmmApi`] over calling generated API modules directly.

#![allow(clippy::too_many_arguments)]

mod client;
mod config;
mod generated_impls;

pub use client::{DlmmApi, LimitOrders, Pools, Portfolio, Positions, Stats, Wallets};
pub use config::DlmmApiOptions;

/// Generated APIs and models.
pub use meteora_dlmm_api_generated::{self as generated, apis::Error, models};
