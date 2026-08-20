# PositionPnLData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_time_deposits** | [**models::TokenPairWithTotal**](TokenPairWithTotal.md) |  | 
**all_time_fees** | [**models::TokenPairWithTotal**](TokenPairWithTotal.md) |  | 
**all_time_withdrawals** | [**models::TokenPairWithTotal**](TokenPairWithTotal.md) |  | 
**closed_at** | Option<**i64**> |  | [optional]
**created_at** | Option<**i64**> |  | [optional]
**fee_per_tvl24h** | **String** | User's fee per tvl in rolling 24h | 
**is_closed** | **bool** |  | 
**is_out_of_range** | Option<**bool**> |  | [optional]
**lower_bin_id** | **i32** |  | 
**max_price** | **String** |  | 
**min_price** | **String** |  | 
**pnl_pct_change** | **String** |  | 
**pnl_sol** | Option<**f64**> |  | [optional]
**pnl_sol_pct_change** | Option<**f64**> |  | [optional]
**pnl_usd** | **String** |  | 
**pool_active_bin_id** | Option<**i32**> |  | [optional]
**pool_active_price** | Option<**String**> |  | [optional]
**position_address** | **String** |  | 
**unrealized_pnl** | Option<[**models::UnrealizedPnL**](UnrealizedPnL.md)> |  | [optional]
**upper_bin_id** | **i32** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


