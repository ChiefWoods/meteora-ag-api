# \LimitOrdersApi

All URIs are relative to *https://dlmm.datapi.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_bonus_claimed_for_pool**](LimitOrdersApi.md#get_bonus_claimed_for_pool) | **GET** /wallets/{wallet}/limit_orders/pools/{pool_address}/bonus_claimed | Get Bonus Claimed For Pool
[**get_closed_limit_order_pools**](LimitOrdersApi.md#get_closed_limit_order_pools) | **GET** /wallets/{wallet}/limit_orders/closed/pools | Get Closed Limit Order Pools
[**get_closed_limit_orders_for_pool**](LimitOrdersApi.md#get_closed_limit_orders_for_pool) | **GET** /wallets/{wallet}/limit_orders/closed/pools/{pool_address} | Get Closed Limit Orders For Pool
[**get_limit_order_summary**](LimitOrdersApi.md#get_limit_order_summary) | **GET** /wallets/{wallet}/limit_orders/summary | Get Limit Order Summary
[**get_open_limit_order_pools**](LimitOrdersApi.md#get_open_limit_order_pools) | **GET** /wallets/{wallet}/limit_orders/open/pools | Get Open Limit Order Pools
[**get_open_limit_orders_for_pool**](LimitOrdersApi.md#get_open_limit_orders_for_pool) | **GET** /wallets/{wallet}/limit_orders/open/pools/{pool_address} | Get Open Limit Orders For Pool



## get_bonus_claimed_for_pool

> models::BonusClaimedResponse get_bonus_claimed_for_pool(wallet, pool_address)
Get Bonus Claimed For Pool

Returns the total realized bonus a wallet has claimed on one DLMM pool, aggregated across every cancel event the wallet has on the pool. Includes cancels on orders that have not yet been closed (a cancel pays bonus immediately; the on-chain account is closed separately via `CloseLimitOrderIfEmpty`). USD/SOL values are derived using each cancel row's stored cancel-time price ratios — not current spot.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |
**pool_address** | **String** | Base58-encoded LB pair (pool) address | [required] |

### Return type

[**models::BonusClaimedResponse**](BonusClaimedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_closed_limit_order_pools

> models::PaginationResponseClosedLimitOrderPoolSummary get_closed_limit_order_pools(wallet, page, page_size)
Get Closed Limit Order Pools

Paginated per-pool summary of the wallet's closed limit orders, sorted by `last_closed_at` DESC. A limit order is closed iff it has a row in `close_limit_orders` — cancel-only orders remain in `/open`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |
**page** | Option<**i64**> | Page number, 1-indexed. Default: 1 |  |
**page_size** | Option<**i64**> | Number of results per page. Default: 20, max: 1000 |  |[default to 20]

### Return type

[**models::PaginationResponseClosedLimitOrderPoolSummary**](PaginationResponse_ClosedLimitOrderPoolSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_closed_limit_orders_for_pool

> models::ClosedLimitOrdersForPoolResponse get_closed_limit_orders_for_pool(wallet, pool_address, page, page_size)
Get Closed Limit Orders For Pool

Paginated per-order lifecycle view for the wallet's closed limit orders in one pool, sorted by `last_closed_at` DESC.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |
**pool_address** | **String** | Base58-encoded LB pair (pool) address | [required] |
**page** | Option<**i64**> | Page number, 1-indexed. Default: 1 |  |
**page_size** | Option<**i64**> | Number of results per page. Default: 20, max: 1000 |  |[default to 20]

### Return type

[**models::ClosedLimitOrdersForPoolResponse**](ClosedLimitOrdersForPoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_limit_order_summary

> models::LimitOrderSummaryResponse get_limit_order_summary(wallet)
Get Limit Order Summary

Returns aggregate totals for a user's limit orders across all pools: open/closed order counts, total deposit value, and total bonus fees earned. \"Open\" means placed with no `close_limit_orders` row. \"Closed\" means the order has a `close_limit_orders` row (`CloseLimitOrderIfEmpty` was invoked).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |

### Return type

[**models::LimitOrderSummaryResponse**](LimitOrderSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_open_limit_order_pools

> models::PaginationResponseOpenLimitOrderPoolSummary get_open_limit_order_pools(wallet, page, page_size)
Get Open Limit Order Pools

Paginated per-pool summary of the wallet's live limit orders, sorted by deposit USD DESC. A limit order is live until it has a `close_limit_orders` row — cancels do not remove it from this view.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |
**page** | Option<**i64**> | Page number, 1-indexed. Default: 1 |  |
**page_size** | Option<**i64**> | Number of results per page. Default: 20, max: 1000 |  |[default to 20]

### Return type

[**models::PaginationResponseOpenLimitOrderPoolSummary**](PaginationResponse_OpenLimitOrderPoolSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_open_limit_orders_for_pool

> models::OpenLimitOrdersForPoolResponse get_open_limit_orders_for_pool(wallet, pool_address, page, page_size)
Get Open Limit Orders For Pool

Paginated per-order detail for the wallet's live limit orders in one pool, sorted by placement time DESC. \"Live\" = has no `close_limit_orders` row.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**wallet** | **String** | Base58-encoded wallet address | [required] |
**pool_address** | **String** | Base58-encoded LB pair (pool) address | [required] |
**page** | Option<**i64**> | Page number, 1-indexed. Default: 1 |  |
**page_size** | Option<**i64**> | Number of results per page. Default: 20, max: 1000 |  |[default to 20]

### Return type

[**models::OpenLimitOrdersForPoolResponse**](OpenLimitOrdersForPoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

