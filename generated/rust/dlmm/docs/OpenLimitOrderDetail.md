# OpenLimitOrderDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_distribution** | [**Vec<models::OpenLimitOrderBinPoint>**](OpenLimitOrderBinPoint.md) | Per-bin distribution sorted by `bin_id` ASC. | 
**filled_input_amount** | **String** | Filled amount expressed in input (deposit) token units. | 
**filled_pct** | **String** |  | 
**input_amount** | **String** |  | 
**input_amount_sol** | **String** |  | 
**input_amount_usd** | **String** |  | 
**input_token** | **String** |  | 
**input_token_mint** | **String** |  | 
**is_ask_side** | **bool** | true = ask (selling X for Y), false = bid (buying X with Y). | 
**limit_order_address** | **String** |  | 
**lower_pool_price** | **f64** |  | 
**nearest_unfilled_bin_id** | Option<**i32**> | Bin id of the nearest still-unfilled (or partially-filled) bin to the current active bin. `None` only when every bin in the order is fulfilled. Tie-broken to the lower `bin_id`. | [optional]
**nearest_unfilled_bin_price** | Option<**String**> | Price of `nearest_unfilled_bin_id` (same units as `current_pool_price` on the enclosing response wrapper). `None` only when fully filled. Frontend computes the percentage distance as `(nearest_unfilled_bin_price - current_pool_price) / current_pool_price`. | [optional]
**opened_at** | **i64** | Unix seconds. | 
**opened_at_signature** | **String** |  | 
**opened_at_slot** | **i64** |  | 
**output_amount_expected** | **String** | Expected output at placement bin prices — `amount_y` for asks, `amount_x` for bids. Pre-computed on the `limit_orders_aggregate.output_amount_expected` column by the open MV via `if(is_ask_side, amount_y, amount_x)`, so this field is just the stored value (no per-bin math at request time). | 
**output_token** | **String** |  | 
**output_token_mint** | **String** |  | 
**total_bonus_sol** | **String** | SOL value of bonus (current spot SOL price). | 
**total_bonus_usd** | **String** |  | 
**total_bonus_x** | **String** |  | 
**total_bonus_y** | **String** |  | 
**total_filled_amount** | **String** | Total filled amount in *output* token display units — what the user has received. Computed as `Σ fulfilled_at_bin × bin_price` for asks, or `Σ fulfilled / bin_price` for bids. Each bin's price is fixed by the program at fill time, so this is the close estimate of the on-chain output (a true figure is only emitted at cancel). | 
**total_filled_amount_sol** | **String** |  | 
**total_filled_amount_usd** | **String** |  | 
**total_unfilled_amount** | **String** | Total unfilled deposit in input-token display units (`input_amount - filled_input_amount`). | 
**total_unfilled_amount_sol** | **String** |  | 
**total_unfilled_amount_usd** | **String** |  | 
**upper_pool_price** | **f64** |  | 
**user_address** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


