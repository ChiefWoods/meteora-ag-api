use meteora_stake2earn_api_generated::apis::configuration::Configuration;

use crate::stake2earn::config::{create_configuration, Stake2EarnApiOptions};

macro_rules! api_client {
    ($name:ident) => {
        #[derive(Clone, Debug)]
        pub struct $name {
            pub(crate) config: Configuration,
        }
    };
}

api_client!(Analytics);
api_client!(Vault);

/// Typed access to Stake2Earn APIs.
#[derive(Clone, Debug)]
pub struct Stake2EarnApi {
    pub analytics: Analytics,
    pub vault: Vault,
}

impl Stake2EarnApi {
    pub fn new(options: Stake2EarnApiOptions) -> Self {
        Self {
            analytics: Analytics { config: create_configuration(&options) },
            vault: Vault { config: create_configuration(&options) },
        }
    }
}

impl Default for Stake2EarnApi {
    fn default() -> Self {
        Self::new(Stake2EarnApiOptions::default())
    }
}
