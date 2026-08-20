# OpenLimitOrderBinPoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_id** | **i32** |  | 
**deposit_amount** | **String** | Original deposit at this bin in input-token display units. The frontend's bar-chart heights are derived from `deposit_amount × price` (i.e. the notional in output-token terms) — no per-bin USD field is exposed since order-level totals carry the dollar/SOL values. | 
**fill_status** | [**models::LimitOrderBinFillStatus**](LimitOrderBinFillStatus.md) |  | 
**fulfilled_amount** | **String** | Filled portion in input-token display units. | 
**output_received_amount** | **String** | Output-token amount received from this bin's fills, in output-token display units. Ask: `fulfilled_amount × price`. Bid: `fulfilled_amount / price`. | 
**price** | **String** | Price at this bin (token Y per token X). | 
**unfilled_amount** | **String** | Remaining unfilled portion in input-token display units. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


