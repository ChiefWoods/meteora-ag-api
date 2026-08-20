# \VirtualPriceApi

All URIs are relative to *https://merv2-api.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_virtual_price**](VirtualPriceApi.md#get_virtual_price) | **GET** /virtual_price/{token_mint}/{strategy} | get_virtual_price



## get_virtual_price

> Vec<models::VirtualPrice> get_virtual_price(token_mint, strategy)
get_virtual_price

Returns virtual price information for a specific strategy within a vault

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token_mint** | **String** | The token mint address (Solana public key) | [required] |
**strategy** | **String** | The strategy address (Solana public key) | [required] |

### Return type

[**Vec<models::VirtualPrice>**](VirtualPrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

