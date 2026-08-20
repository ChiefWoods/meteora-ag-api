# LimitOrderPoolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_fee** | **String** | Pool base fee as a percentage (f64 serialized as string to preserve precision). | 
**bin_step** | **i32** | Pool bin step in basis points (on-chain u16). | 
**collect_fee_mode** | **i32** | 0 = `InputOnly` (bonus flows to the deposit/input token), 1 = `OnlyY` (bonus always in token Y regardless of side). | 
**pair_name** | **String** | `\"{X}-{Y}\"` computed from token symbols. | 
**pool_address** | **String** |  | 
**token_x** | **String** |  | 
**token_x_icon** | **String** |  | 
**token_x_mint** | **String** |  | 
**token_y** | **String** |  | 
**token_y_icon** | **String** |  | 
**token_y_mint** | **String** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


