# PoolResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Address of the liquidity pair | 
**alpha_vault** | **String** | Aplha vault | 
**created_at** | **i64** | Pool created at timestamp | 
**current_price** | **f64** | Price of the liquidity pair | 
**farm_apr** | **f64** | Farm reward apr | 
**farm_apy** | **f64** | Farm reward apy | 
**fee_tvl_ratio** | [**models::TimeWindowData**](TimeWindowData.md) |  | 
**fees** | [**models::TimeWindowData**](TimeWindowData.md) |  | 
**has_farm** | **bool** | Whether the pool has a farm or not | 
**is_blacklisted** | **bool** | Flag to indicate whether the pair is blacklisted | 
**launchpad** | Option<**String**> | Launchpad of the pair | [optional]
**name** | **String** | Name of the liquidity pair | 
**permanent_lock_liquidity** | **f64** | Permanently locked liquidity inside the pool | 
**pool_config** | [**models::PoolConfig**](PoolConfig.md) |  | 
**protocol_fees** | [**models::TimeWindowData**](TimeWindowData.md) |  | 
**tags** | **Vec<String>** | Tags of the pair | 
**token_x** | [**models::TokenMetrics**](TokenMetrics.md) |  | 
**token_x_amount** | **f64** | Amount of token X in the pool | 
**token_y** | [**models::TokenMetrics**](TokenMetrics.md) |  | 
**token_y_amount** | **f64** | Amount of token Y in the pool | 
**tvl** | **f64** | Total liquidity the liquidity pair holding. Also known as Total Value Locked | 
**vault_x** | **String** | Vault X | 
**vault_y** | **String** | Vault Y | 
**vested_liquidity** | [**models::VestedLiquidity**](VestedLiquidity.md) |  | 
**volume** | [**models::TimeWindowData**](TimeWindowData.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


