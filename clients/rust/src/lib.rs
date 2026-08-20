//! Unified Meteora API client.
//!
//! Each product's generated bindings are available through a dedicated client.

#![allow(clippy::too_many_arguments)]

pub mod damm_v1;
pub mod damm_v2;
pub mod dlmm;
pub mod dynamic_vault;
pub mod stake2earn;

pub use damm_v1::{DammV1Api, DammV1ApiOptions};
pub use damm_v2::{DammV2Api, DammV2ApiOptions};
pub use dlmm::{DlmmApi, DlmmApiOptions};
pub use dynamic_vault::{DynamicVaultApi, DynamicVaultApiOptions};
pub use stake2earn::{Stake2EarnApi, Stake2EarnApiOptions};
