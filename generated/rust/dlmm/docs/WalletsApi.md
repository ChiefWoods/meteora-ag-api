# \WalletsApi

All URIs are relative to *https://dlmm.datapi.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_wallet_pool_total_claims**](WalletsApi.md#get_wallet_pool_total_claims) | **GET** /wallets/{wallet}/pools/{pool_address}/total_claims | Get Wallet Pool Total Claims



## get_wallet_pool_total_claims

> models::GetWalletTotalClaimsResponse get_wallet_pool_total_claims(wallet, pool_address)
Get Wallet Pool Total Claims

Returns combined total claimed fees and rewards for a wallet in a specific pool

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |
**pool_address** | **String** | Base58-encoded pool address | [required] |

### Return type

[**models::GetWalletTotalClaimsResponse**](GetWalletTotalClaimsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

