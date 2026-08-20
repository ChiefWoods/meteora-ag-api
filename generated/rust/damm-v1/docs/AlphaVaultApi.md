# \AlphaVaultApi

All URIs are relative to *https://damm-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_all**](AlphaVaultApi.md#get_all) | **GET** /alpha-vault-configs | Alpha Vault Configs
[**get_vaults**](AlphaVaultApi.md#get_vaults) | **GET** /alpha-vault | Alpha Vaults



## get_all

> models::AlphaVaultVaultConfigResponse get_all()
Alpha Vault Configs

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::AlphaVaultVaultConfigResponse**](AlphaVaultVaultConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_vaults

> Vec<models::AlphaVaultResponse> get_vaults(vault_address, pool_address, base_mint)
Alpha Vaults

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**vault_address** | Option<[**Vec<String>**](String.md)> | List of vault addresses to filter |  |
**pool_address** | Option<[**Vec<String>**](String.md)> | List of pool addresses to filter |  |
**base_mint** | Option<[**Vec<String>**](String.md)> | List of base mint to filter |  |

### Return type

[**Vec<models::AlphaVaultResponse>**](AlphaVaultResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

