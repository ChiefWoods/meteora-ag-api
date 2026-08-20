use meteora_dynamic_vault_api_generated::apis::configuration::Configuration;

use crate::dynamic_vault::config::{create_configuration, DynamicVaultApiOptions};

macro_rules! api_client {
    ($name:ident) => {
        #[derive(Clone, Debug)]
        pub struct $name {
            pub(crate) config: Configuration,
        }
    };
}

api_client!(Apy);
api_client!(Vaults);
api_client!(VirtualPrice);

/// Typed access to DynamicVault APIs.
#[derive(Clone, Debug)]
pub struct DynamicVaultApi {
    pub apy: Apy,
    pub vaults: Vaults,
    pub virtual_price: VirtualPrice,
}

impl DynamicVaultApi {
    pub fn new(options: DynamicVaultApiOptions) -> Self {
        Self {
            apy: Apy { config: create_configuration(&options) },
            vaults: Vaults { config: create_configuration(&options) },
            virtual_price: VirtualPrice { config: create_configuration(&options) },
        }
    }
}

impl Default for DynamicVaultApi {
    fn default() -> Self {
        Self::new(DynamicVaultApiOptions::default())
    }
}
