# OpenLimitOrdersForPoolResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_active_bin_id** | **i32** | Live active bin id from the dynamic pool cache. | 
**current_page** | **i64** |  | 
**current_pool_price** | **String** | Pool's live price (token Y per token X) from the dynamic pool cache. | 
**data** | [**Vec<models::OpenLimitOrderDetail>**](OpenLimitOrderDetail.md) |  | 
**page_size** | **i64** |  | 
**pages** | **i64** |  | 
**pool** | [**models::LimitOrderPoolDetails**](LimitOrderPoolDetails.md) |  | 
**total** | **i64** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


