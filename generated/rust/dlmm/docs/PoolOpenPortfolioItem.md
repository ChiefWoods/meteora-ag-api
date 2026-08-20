# PoolOpenPortfolioItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balances** | **String** | Current balance in USD | 
**balances_sol** | Option<**String**> | Current balance in SOL | [optional]
**base_fee** | **f64** |  | 
**bin_step** | **i32** |  | 
**collect_fee_mode** | **i32** |  | 
**fee_per_tvl24h** | **String** | User's fee per tvl in rolling 24h | 
**list_positions** | **Vec<String>** | List of position addresses in pool | 
**open_position_count** | **i64** | Number of open positions | 
**out_of_range** | Option<**bool**> | Pool dynamic fields Pool is out of range if one of the user's positions is out of range If this is None, it means we couldn't determine out_of_range status | [optional]
**pnl** | **String** | Live PnL | 
**pnl_pct_change** | **String** | Live PnL percentage change | 
**pnl_sol** | Option<**String**> | Live PnL in SOL | [optional]
**pnl_sol_pct_change** | Option<**String**> | Live PnL percentage change (SOL) | [optional]
**pool_address** | **String** |  | 
**pool_price** | Option<**f64**> | Current pool price | [optional]
**pool_state_updated_at_block_time** | Option<**i64**> |  | [optional]
**pool_state_updated_at_slot** | Option<**i64**> | Tracing metrics | [optional]
**positions_out_of_range** | **Vec<String>** | List of position addresses that are out of range | 
**reward_x** | **String** |  | 
**reward_y** | **String** |  | 
**token_x** | **String** |  | 
**token_x_icon** | **String** |  | 
**token_x_mint** | **String** |  | 
**token_y** | **String** |  | 
**token_y_icon** | **String** |  | 
**token_y_mint** | **String** |  | 
**total_deposit** | **String** | Total deposit in USD | 
**total_deposit_sol** | Option<**String**> | Total deposit in SOL (historical per-event SOL price) | [optional]
**unclaimed_fees** | **String** | Current unclaimed fee in USD | 
**unclaimed_fees_sol** | Option<**String**> | Current unclaimed fee in SOL | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


