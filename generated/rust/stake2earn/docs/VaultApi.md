# \VaultApi

All URIs are relative to *https://stake-for-fee-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filter_vaults**](VaultApi.md#filter_vaults) | **GET** /vault/filter | 
[**get_all_vaults**](VaultApi.md#get_all_vaults) | **GET** /vault/all | 
[**get_one_vault**](VaultApi.md#get_one_vault) | **GET** /vault/{vault_address} | 



## filter_vaults

> models::VaultsResponse filter_vaults(pool_address)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pool_address** | Option<[**Vec<String>**](String.md)> | The list of pool addresses. Maximum of 100 pool addresses. |  |

### Return type

[**models::VaultsResponse**](VaultsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_all_vaults

> models::VaultsResponse get_all_vaults()


### Parameters

This endpoint does not need any parameter.

### Return type

[**models::VaultsResponse**](VaultsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_one_vault

> models::VaultDetailWithLeaderboard get_one_vault(vault_address)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**vault_address** | **String** | Fee vault address. | [required] |

### Return type

[**models::VaultDetailWithLeaderboard**](VaultDetailWithLeaderboard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

