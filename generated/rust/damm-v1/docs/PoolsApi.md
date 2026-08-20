# \PoolsApi

All URIs are relative to *https://damm-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filter_and_get_pool_info**](PoolsApi.md#filter_and_get_pool_info) | **GET** /pools/search | Pool Search
[**filter_and_get_pool_info_deprecated**](PoolsApi.md#filter_and_get_pool_info_deprecated) | **GET** /pools/{version} | Pool Search Deprecated
[**get_all_pool_configs**](PoolsApi.md#get_all_pool_configs) | **GET** /pool-configs | Pool Configs
[**get_pools**](PoolsApi.md#get_pools) | **GET** /pools | Pools
[**get_pools_by_a_vault_lp**](PoolsApi.md#get_pools_by_a_vault_lp) | **POST** /pools_by_a_vault_lp | Pools By A Vault LP
[**get_pools_metrics**](PoolsApi.md#get_pools_metrics) | **GET** /pools-metrics | Pool Metrics
[**get_pools_with_farm**](PoolsApi.md#get_pools_with_farm) | **GET** /farms | Pools With Farms



## filter_and_get_pool_info

> models::PaginatedPoolResponse filter_and_get_pool_info(page, size, filter, sort_key, order_by, pools_to_top, unknown, pool_type, is_monitoring, hide_low_tvl, hide_low_apr, include_token_mints, include_pool_token_pairs, launchpad)
Pool Search

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | **i32** |  | [required] |
**size** | **i32** |  | [required] |
**filter** | Option<**String**> |  |  |
**sort_key** | Option<[**models::PoolSortKey**](Models__PoolSortKey.md)> | Sort key. Default is Volume. |  |
**order_by** | Option<[**models::OrderBy**](Models__OrderBy.md)> | Sort order. Default is Descending. |  |
**pools_to_top** | Option<[**Vec<String>**](String.md)> | Pools to be sorted to top |  |
**unknown** | Option<**bool**> | Common options to filter pools Toggle unknown pools |  |
**pool_type** | Option<[**models::PoolTypeQueryParam**](Models__PoolTypeQueryParam.md)> | Filter only specific pool type |  |
**is_monitoring** | Option<**bool**> | Toggle pools that is under monitoring |  |
**hide_low_tvl** | Option<**f64**> | Hide pools with lower TVL than the value passed in |  |
**hide_low_apr** | Option<**bool**> | Hide pools with low APR |  |
**include_token_mints** | Option<[**Vec<String>**](String.md)> | Only include token mints. Allow list of token mints |  |
**include_pool_token_pairs** | Option<[**Vec<String>**](String.md)> | Only include pool token pairs. Allow list of pool token mints in format EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v-So11111111111111111111111111111111111111112 |  |
**launchpad** | Option<[**Vec<String>**](String.md)> | Launchpad to filter by |  |

### Return type

[**models::PaginatedPoolResponse**](PaginatedPoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## filter_and_get_pool_info_deprecated

> models::PaginatedPoolResponse filter_and_get_pool_info_deprecated(page, size, version, filter, sort_key, order_by, pools_to_top, unknown, pool_type, is_monitoring, hide_low_tvl, hide_low_apr, include_token_mints, include_pool_token_pairs, launchpad)
Pool Search Deprecated

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | **i32** |  | [required] |
**size** | **i32** |  | [required] |
**version** | **String** |  | [required] |
**filter** | Option<**String**> |  |  |
**sort_key** | Option<**String**> | Sort key. Default is Volume. |  |
**order_by** | Option<**String**> | Sort order. Default is Descending. |  |
**pools_to_top** | Option<[**Vec<String>**](String.md)> | Pools to be sorted to top |  |
**unknown** | Option<**bool**> | Common options to filter pools Toggle unknown pools |  |
**pool_type** | Option<**String**> | Filter only specific pool type |  |
**is_monitoring** | Option<**bool**> | Toggle pools that is under monitoring |  |
**hide_low_tvl** | Option<**f64**> | Hide pools with lower TVL than the value passed in |  |
**hide_low_apr** | Option<**bool**> | Hide pools with low APR |  |
**include_token_mints** | Option<[**Vec<String>**](String.md)> | Only include token mints. Allow list of token mints |  |
**include_pool_token_pairs** | Option<[**Vec<String>**](String.md)> | Only include pool token pairs. Allow list of pool token mints in format EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v-So11111111111111111111111111111111111111112 |  |
**launchpad** | Option<[**Vec<String>**](String.md)> | Launchpad to filter by |  |

### Return type

[**models::PaginatedPoolResponse**](PaginatedPoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_all_pool_configs

> Vec<models::PoolConfigResponse> get_all_pool_configs()
Pool Configs

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::PoolConfigResponse>**](PoolConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pools

> Vec<models::PoolResponse> get_pools(address, unknown, pool_type, is_monitoring, hide_low_tvl, hide_low_apr, launchpad)
Pools

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**address** | Option<[**Vec<String>**](String.md)> |  |  |
**unknown** | Option<**bool**> | Toggle unknown pools |  |
**pool_type** | Option<[**models::PoolTypeQueryParam**](Models__PoolTypeQueryParam.md)> | Filter only specific pool type |  |
**is_monitoring** | Option<**bool**> | Toggle pools that is under monitoring |  |
**hide_low_tvl** | Option<**f64**> | Hide pools with lower TVL than the value passed in |  |
**hide_low_apr** | Option<**bool**> | Hide pools with low APR |  |
**launchpad** | Option<[**Vec<String>**](String.md)> | Launchpad to filter by |  |

### Return type

[**Vec<models::PoolResponse>**](PoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pools_by_a_vault_lp

> Vec<models::PoolResponse> get_pools_by_a_vault_lp(pool_post_request)
Pools By A Vault LP

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pool_post_request** | [**PoolPostRequest**](PoolPostRequest.md) |  | [required] |

### Return type

[**Vec<models::PoolResponse>**](PoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pools_metrics

> models::AggregatePoolsMetrics get_pools_metrics()
Pool Metrics

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::AggregatePoolsMetrics**](AggregatePoolsMetrics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pools_with_farm

> Vec<models::PoolResponse> get_pools_with_farm()
Pools With Farms

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::PoolResponse>**](PoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

