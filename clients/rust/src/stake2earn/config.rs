use meteora_stake2earn_api_generated::apis::configuration::Configuration;

/// Options shared by every generated Stake2Earn API.
#[derive(Clone, Debug, Default)]
pub struct Stake2EarnApiOptions {
    /// Override the product API's default base URL.
    pub base_url: Option<String>,
    /// reqwest client used by every generated API call.
    pub client: Option<reqwest::Client>,
}

pub(crate) fn create_configuration(options: &Stake2EarnApiOptions) -> Configuration {
    let base_path = options.base_url.as_deref().unwrap_or("https://stake-for-fee-api.meteora.ag");

    if base_path.trim().is_empty() {
        panic!("base_url must not be blank");
    }

    let mut configuration = Configuration::new();
    configuration.base_path = base_path.to_owned();

    if let Some(client) = &options.client {
        configuration.client = client.clone();
    }

    configuration
}
