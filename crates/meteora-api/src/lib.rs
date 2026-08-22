//! Rust clients for Meteora APIs generated from the repository's OpenAPI specs.

/// Generated client and types for the DLMM API.
#[path = "../generated/dlmm/mod.rs"]
pub mod dlmm;

/// Generated client and types for the DAMM v1 API.
#[path = "../generated/damm_v1/mod.rs"]
pub mod damm_v1;

/// Generated client and types for the DAMM v2 API.
#[path = "../generated/damm_v2/mod.rs"]
pub mod damm_v2;

/// Generated client and types for the Dynamic Vault API.
#[path = "../generated/dynamic_vault/mod.rs"]
pub mod dynamic_vault;

/// Generated client and types for the Stake2Earn API.
#[path = "../generated/stake2earn/mod.rs"]
pub mod stake2earn;

pub type DlmmApi = dlmm::HttpClient;
pub type DammV1Api = damm_v1::HttpClient;
pub type DammV2Api = damm_v2::HttpClient;
pub type DynamicVaultApi = dynamic_vault::HttpClient;
pub type Stake2EarnApi = stake2earn::HttpClient;

pub fn create_dlmm_api() -> DlmmApi {
    DlmmApi::new()
}

pub fn create_damm_v1_api() -> DammV1Api {
    DammV1Api::new()
}

pub fn create_damm_v2_api() -> DammV2Api {
    DammV2Api::new()
}

pub fn create_dynamic_vault_api() -> DynamicVaultApi {
    DynamicVaultApi::new()
}

pub fn create_stake2earn_api() -> Stake2EarnApi {
    Stake2EarnApi::new()
}
