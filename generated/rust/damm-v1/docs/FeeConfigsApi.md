# \FeeConfigsApi

All URIs are relative to *https://damm-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_config_associated_fee_configs**](FeeConfigsApi.md#get_config_associated_fee_configs) | **GET** /fee-config/{config_address} | Fee Configs



## get_config_associated_fee_configs

> Vec<models::FeeConfigResponse> get_config_associated_fee_configs(config_address)
Fee Configs

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**config_address** | **String** | Config address | [required] |

### Return type

[**Vec<models::FeeConfigResponse>**](FeeConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

