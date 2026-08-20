# VaultState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **String** | Token symbol (e.g., USDC, SOL) | 
**token_address** | **String** | Token mint address | 
**pubkey** | **String** | Vault public key address | 
**is_monitoring** | **bool** | Whether the vault is currently being monitored | 
**vault_order** | **i32** | Display order of the vault | 
**usd_rate** | **f64** | Current USD exchange rate for the token | 
**closest_apy** | **f64** | Most recent APY calculation | 
**average_apy** | **f64** | Moving average APY | 
**long_apy** | **f64** | Long-term APY calculation | 
**earned_amount** | **i32** | Total amount earned by the vault | 
**virtual_price** | **String** | Current virtual price as decimal string | 
**enabled** | **i32** | Whether the vault is enabled (1) or disabled (0) | 
**lp_mint** | **String** | LP token mint address | 
**fee_pubkey** | **String** | Fee collection account public key | 
**total_amount** | **i32** | Total amount deposited in the vault | 
**total_amount_with_profit** | **i32** | Total amount including accumulated profits | 
**token_amount** | **i32** | Current token amount in the vault | 
**fee_amount** | **i32** | Accumulated fee amount | 
**lp_supply** | **i32** | Total LP token supply | 
**earned_usd_amount** | **f64** | Earned amount in USD | 
**strategies** | [**Vec<models::StrategyInfo>**](StrategyInfo.md) | List of strategies used by this vault | 
**timestamp** | **i32** | Last update timestamp | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


