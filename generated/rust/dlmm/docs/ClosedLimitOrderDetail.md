# ClosedLimitOrderDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filled_input_amount** | **String** |  | 
**filled_pct** | **String** |  | 
**input_token** | **String** |  | 
**input_token_mint** | **String** |  | 
**is_ask_side** | **bool** |  | 
**last_closed_at** | **i64** | Unix seconds. Block time of the close event. | 
**limit_order_address** | **String** |  | 
**lower_pool_price** | **f64** |  | 
**opened_at** | **i64** | Unix seconds. | 
**opened_at_signature** | **String** |  | 
**opened_at_slot** | **i64** |  | 
**output_amount_expected** | **String** | Expected output at placement bin prices — `amount_y` for asks, `amount_x` for bids. Pre-computed on the `limit_orders_aggregate.output_amount_expected` column by the open MV via `if(is_ask_side, amount_y, amount_x)`; the closed-detail SQL reads the stored value directly. Mirrors `OpenLimitOrderDetail::output_amount_expected`. | 
**output_token** | **String** |  | 
**output_token_mint** | **String** |  | 
**received_output_amount** | **String** | Output token amount received for the filled portion of this order, in output-token display units. Sourced from cancel events: the cancel instruction emits the output-side token alongside any unfilled deposit remainder. For an ask order this is `total_withdrawal_y`; for a bid order it is `total_withdrawal_x`. | 
**terminal_signature** | **String** |  | 
**terminal_slot** | **i64** |  | 
**total_bonus_sol** | **String** | SOL value of bonus (cancel-event-time SOL price). | 
**total_bonus_usd** | **String** |  | 
**total_bonus_x** | **String** |  | 
**total_bonus_x_sol** | **String** | SOL value of token X bonus (cancel-event-time SOL price). | 
**total_bonus_x_usd** | **String** | USD value of token X bonus (cancel-event-time USD price). | 
**total_bonus_y** | **String** |  | 
**total_bonus_y_sol** | **String** | SOL value of token Y bonus (cancel-event-time SOL price). | 
**total_bonus_y_usd** | **String** | USD value of token Y bonus (cancel-event-time USD price). | 
**total_deposit_sol** | **String** | SOL value of deposits, deposit-side only (placement-time SOL price). | 
**total_deposit_usd** | **String** | USD value of deposits, deposit-side only (an ask deposits X, a bid deposits Y). | 
**total_deposit_x** | **String** |  | 
**total_deposit_y** | **String** |  | 
**total_withdrawal_sol** | **String** | SOL value of withdrawals (cancel-event-time SOL price). | 
**total_withdrawal_usd** | **String** |  | 
**total_withdrawal_x** | **String** |  | 
**total_withdrawal_x_sol** | **String** | SOL value of token X withdrawn (cancel-event-time SOL price). | 
**total_withdrawal_x_usd** | **String** | USD value of token X withdrawn (cancel-event-time USD price). | 
**total_withdrawal_y** | **String** |  | 
**total_withdrawal_y_sol** | **String** | SOL value of token Y withdrawn (cancel-event-time SOL price). | 
**total_withdrawal_y_usd** | **String** | USD value of token Y withdrawn (cancel-event-time USD price). | 
**upper_pool_price** | **f64** |  | 
**user_address** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


