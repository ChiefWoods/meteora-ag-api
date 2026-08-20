# \ApyApi

All URIs are relative to *https://merv2-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_apy_state**](ApyApi.md#get_apy_state) | **GET** /apy_state/{token_mint} | get_apy_state
[**get_filter_apy_by_time_range**](ApyApi.md#get_filter_apy_by_time_range) | **GET** /apy_filter/{token_mint}/{start_timestamp}/{end_timestamp} | get_apy_by_time_range



## get_apy_state

> models::ApyState get_apy_state(token_mint)
get_apy_state

Returns APY (Annual Percentage Yield) information for strategies associated with a specific token mint

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token_mint** | **String** | The token mint address (Solana public key) | [required] |

### Return type

[**models::ApyState**](ApyState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_filter_apy_by_time_range

> models::ApyState get_filter_apy_by_time_range(token_mint, start_timestamp, end_timestamp)
get_apy_by_time_range

Returns APY information for a specific token mint within a given time range

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token_mint** | **String** | The token mint address (Solana public key) | [required] |
**start_timestamp** | **String** | Start timestamp (Unix timestamp in seconds) | [required] |
**end_timestamp** | **String** | End timestamp (Unix timestamp in seconds). Must be greater than start_timestamp | [required] |

### Return type

[**models::ApyState**](ApyState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

