use meteora_damm_v2_api_generated::apis::configuration::Configuration;

use crate::damm_v2::config::{create_configuration, DammV2ApiOptions};

macro_rules! api_client {
    ($name:ident) => {
        #[derive(Clone, Debug)]
        pub struct $name {
            pub(crate) config: Configuration,
        }
    };
}

api_client!(Pools);
api_client!(Stats);

/// Typed access to DammV2 APIs.
#[derive(Clone, Debug)]
pub struct DammV2Api {
    pub pools: Pools,
    pub stats: Stats,
}

impl DammV2Api {
    pub fn new(options: DammV2ApiOptions) -> Self {
        Self {
            pools: Pools { config: create_configuration(&options) },
            stats: Stats { config: create_configuration(&options) },
        }
    }
}

impl Default for DammV2Api {
    fn default() -> Self {
        Self::new(DammV2ApiOptions::default())
    }
}
