use meteora_dlmm_api_generated::apis::configuration::Configuration;

use crate::dlmm::config::{create_configuration, DlmmApiOptions};

macro_rules! api_client {
    ($name:ident) => {
        #[derive(Clone, Debug)]
        pub struct $name {
            pub(crate) config: Configuration,
        }
    };
}

api_client!(LimitOrders);
api_client!(Pools);
api_client!(Portfolio);
api_client!(Positions);
api_client!(Stats);
api_client!(Wallets);

/// Typed access to Dlmm APIs.
#[derive(Clone, Debug)]
pub struct DlmmApi {
    pub limit_orders: LimitOrders,
    pub pools: Pools,
    pub portfolio: Portfolio,
    pub positions: Positions,
    pub stats: Stats,
    pub wallets: Wallets,
}

impl DlmmApi {
    pub fn new(options: DlmmApiOptions) -> Self {
        Self {
            limit_orders: LimitOrders { config: create_configuration(&options) },
            pools: Pools { config: create_configuration(&options) },
            portfolio: Portfolio { config: create_configuration(&options) },
            positions: Positions { config: create_configuration(&options) },
            stats: Stats { config: create_configuration(&options) },
            wallets: Wallets { config: create_configuration(&options) },
        }
    }
}

impl Default for DlmmApi {
    fn default() -> Self {
        Self::new(DlmmApiOptions::default())
    }
}
