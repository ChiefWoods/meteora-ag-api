use meteora_damm_v1_api_generated::apis::configuration::Configuration;

use crate::damm_v1::config::{create_configuration, DammV1ApiOptions};

macro_rules! api_client {
    ($name:ident) => {
        #[derive(Clone, Debug)]
        pub struct $name {
            pub(crate) config: Configuration,
        }
    };
}

api_client!(AlphaVault);
api_client!(FeeConfigs);
api_client!(Pools);

/// Typed access to DammV1 APIs.
#[derive(Clone, Debug)]
pub struct DammV1Api {
    pub alpha_vault: AlphaVault,
    pub fee_configs: FeeConfigs,
    pub pools: Pools,
}

impl DammV1Api {
    pub fn new(options: DammV1ApiOptions) -> Self {
        Self {
            alpha_vault: AlphaVault { config: create_configuration(&options) },
            fee_configs: FeeConfigs { config: create_configuration(&options) },
            pools: Pools { config: create_configuration(&options) },
        }
    }
}

impl Default for DammV1Api {
    fn default() -> Self {
        Self::new(DammV1ApiOptions::default())
    }
}
