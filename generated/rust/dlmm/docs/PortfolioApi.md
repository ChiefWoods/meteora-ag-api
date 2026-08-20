# \PortfolioApi

All URIs are relative to *https://dlmm.datapi.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_portfolio_total**](PortfolioApi.md#get_portfolio_total) | **GET** /portfolio/total | Get total portfolio PnL across all pools
[**get_user_open_portfolio**](PortfolioApi.md#get_user_open_portfolio) | **GET** /portfolio/open | Get user portfolio with all pools containing open positions
[**get_user_portfolio**](PortfolioApi.md#get_user_portfolio) | **GET** /portfolio | Get user portfolio with all pools containing closed positions



## get_portfolio_total

> models::PortfolioTotalResponse get_portfolio_total(user)
Get total portfolio PnL across all pools

Returns the all-time total PnL in USD and percentage change across all user's pools. This aggregates data from all closed positions across the entire portfolio.  # Arguments  * `user` - The wallet address of the user  # Returns  * `200` - The user's total portfolio PnL * `400` - Invalid user address or query parameters

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user** | **String** | User's wallet address | [required] |

### Return type

[**models::PortfolioTotalResponse**](PortfolioTotalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_user_open_portfolio

> models::GetOpenPortfolioResponse get_user_open_portfolio(user, page, page_size, sort_direction, sort_by)
Get user portfolio with all pools containing open positions

Returns a paginated list of pools where the user has open (active) positions. The response includes: - Pool metadata (address, bin step, base fee, token symbols, icons) - Current balances and unclaimed fees in USD and SOL - Pool metrics (TVL, 24h volume, fee/TVL ratio) - List of open position addresses for each pool - Aggregated total metrics across all pools (balances, unclaimed fees, PnL) in USD and SOL - SOL price used for conversion (omitted if unavailable)  Results can be sorted by various metrics and support pagination.  # Arguments  * `user` - The wallet address of the user * `page` - Page number for pagination (default: 1, minimum: 1) * `page_size` - Number of pools per page (default: 20, maximum: 50) * `sort_by` - Field to sort by: `current_balances`, `unclaimed_fee`, `pool_tvl`,   `pool_volume_24h`, or `fee_per_tvl_24h` (default: `current_balances`) * `sort_direction` - Sort direction: `asc` or `desc` (default: `desc`)  # Returns  * `200` - The user's open portfolio with pool metadata, balances, and total metrics * `400` - Invalid user address or query parameters

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user** | **String** | User's wallet address | [required] |
**page** | Option<**i32**> | Page number for pagination (minimum: 1, default: 1) |  |
**page_size** | Option<**i32**> | Page size for pagination (default: 20, maximum: 50) |  |
**sort_direction** | Option<[**SortDirection**](SortDirection.md)> | Sort direction, default is DESC |  |
**sort_by** | Option<[**GetOpenPortfolioSort**](GetOpenPortfolioSort.md)> | Sort by field, default is current_balances |  |

### Return type

[**models::GetOpenPortfolioResponse**](GetOpenPortfolioResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_user_portfolio

> models::GetPortfolioResponse get_user_portfolio(user, page, page_size, days_back)
Get user portfolio with all pools containing closed positions

Returns a paginated list of pools where the user has closed positions, sorted by most recent activity (last_closed_at DESC). The response includes: - Pool metadata (address, token symbols, icons, fees) - Aggregated PnL data (deposits, withdrawals, fees, total PnL) - Per-token breakdowns (X and Y)  For detailed position history within each pool, call the /positions/{pool_address}/pnl endpoint.    # Arguments  * `user` - The wallet address of the user * `page` - Page number for pagination (default: 1) * `page_size` - Number of pools per page (default: 120, max: 365) * `days_back` - Only include pools with positions closed within this many days (default: 90)  # Returns  * `200` - The user's portfolio with pool metadata and aggregated PnL * `400` - Invalid user address or query parameters

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**user** | **String** | User's wallet address | [required] |
**page** | Option<**i32**> | Page number for pagination (minimum: 1, default: 1) |  |
**page_size** | Option<**i32**> | Page size for pagination (default: 20, maximum: 50) |  |
**days_back** | Option<**i32**> | Only include pools with positions closed within this many days Applied only for closed positions (minimum: 1, maximum: 365, default: 120) |  |

### Return type

[**models::GetPortfolioResponse**](GetPortfolioResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

