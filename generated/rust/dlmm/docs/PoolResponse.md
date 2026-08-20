# PoolResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Address of the liquidity pair | 
**apr** | **f64** | 24 hour APR | 
**apy** | **f64** | 24 hour APY | 
**created_at** | **i64** | Pool created at timestamp | 
**cumulative_metrics** | [**models::CumulativeMetrics**](CumulativeMetrics.md) |  | 
**current_price** | **f64** | Price of the liquidity pair | 
**dynamic_fee_pct** | **f64** | Dynamic fee rate. Which is equal to base fee + variable fee. | 
**farm_apr** | **f64** | Farm reward apr | 
**farm_apy** | **f64** | Farm reward apy | 
**fee_tvl_ratio** | [**models::TimeWindowData**](TimeWindowData.md) |  | 
**fees** | [**models::TimeWindowData**](TimeWindowData.md) |  | 
**has_farm** | **bool** | Whether the pool has a farm or not | 
**is_blacklisted** | **bool** | Flag to indicate whether the pair is blacklisted | 
**launchpad** | Option<**String**> | Launchpad of the pair | [optional]
**name** | **String** | Name of the liquidity pair | 
**pool_config** | [**models::PoolConfig**](PoolConfig.md) |  | 
**protocol_fees** | [**models::TimeWindowData**](TimeWindowData.md) |  | 
**reserve_x** | **String** | Address of token X reserve of the liquidity pair | 
**reserve_y** | **String** | Address of token Y reserve of the liquidity pair | 
**reward_mint_x** | **String** | Address of the farming reward X of the liquidity pair | 
**reward_mint_y** | **String** | Address of the farming reward Y of the liquidity pair | 
**tags** | **Vec<String>** | Tags of the pair | 
**token_x** | [**models::TokenMetrics**](TokenMetrics.md) |  | 
**token_x_amount** | **f64** | Token X amount the liquidity pair hold | 
**token_y** | [**models::TokenMetrics**](TokenMetrics.md) |  | 
**token_y_amount** | **f64** | Token Y amount the liquidity pair hold | 
**tvl** | **f64** | Total liquidity the liquidity pair holding. Also known as Total Value Locked | 
**volume** | [**models::TimeWindowData**](TimeWindowData.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


