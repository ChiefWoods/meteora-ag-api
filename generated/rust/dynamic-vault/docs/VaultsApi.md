# \VaultsApi

All URIs are relative to *https://merv2-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vault_addresses**](VaultsApi.md#get_vault_addresses) | **GET** /vault_addresses | get_vault_addresses
[**get_vault_info**](VaultsApi.md#get_vault_info) | **GET** /vault_info | get_vault_info
[**get_vault_state**](VaultsApi.md#get_vault_state) | **GET** /vault_state/{token_mint} | get_vault_state



## get_vault_addresses

> Vec<models::VaultAddress> get_vault_addresses()
get_vault_addresses

Returns a list of vault addresses with their associated information

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::VaultAddress>**](VaultAddress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_vault_info

> Vec<models::VaultState> get_vault_info()
get_vault_info

Returns detailed information about all monitored vaults including their states, strategies, and performance metrics

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::VaultState>**](VaultState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_vault_state

> models::VaultState get_vault_state(token_mint)
get_vault_state

Returns the current state of a specific vault identified by its token mint address

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token_mint** | **String** | The token mint address (Solana public key) | [required] |

### Return type

[**models::VaultState**](VaultState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

