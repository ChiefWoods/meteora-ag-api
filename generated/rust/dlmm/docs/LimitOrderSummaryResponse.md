# LimitOrderSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_orders** | **i64** | Number of limit orders that have been closed on-chain. | 
**open_orders** | **i64** | Number of limit orders that are still open (no close event). | 
**total_bonus_sol** | **String** | Total SOL value of bonus accrued across open orders (current spot SOL price). | 
**total_bonus_usd** | **String** | Total USD value of bonus (pro-rata fee share) accrued across open orders. | 
**total_deposit_sol** | **String** | Total SOL value of currently-open order deposits (placement-time SOL price). | 
**total_deposit_usd** | **String** | Total USD value of currently-open order deposits. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


