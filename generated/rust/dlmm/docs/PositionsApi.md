# \PositionsApi

All URIs are relative to *https://dlmm.datapi.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pool_position_pnl**](PositionsApi.md#get_pool_position_pnl) | **GET** /positions/{pool_address}/pnl | Get position PnL data (open and closed positions with on-the-fly calculation)
[**get_position_historical_events**](PositionsApi.md#get_position_historical_events) | **GET** /positions/{address}/historical | Get the historical events for a position



## get_pool_position_pnl

> models::GetPoolPositionPnLResponse get_pool_position_pnl(pool_address, user, status, page, page_size)
Get position PnL data (open and closed positions with on-the-fly calculation)

Returns positions for a specific pool and user with calculated PnL values. Includes SOL-denominated amounts when SOL price is available (omitted otherwise). Results can be filtered by status (open/closed) and are paginated.  # Arguments  * `pool_address` - The address of the pool * `user` - The user address * `status` - Filter by status: \"open\", \"closed\", or omit for all (default: all) * `page` - Page number starting from 1 (default: 1)  # Returns  * `200` - Paginated list of positions with PnL data in USD and SOL

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pool_address** | **String** |  | [required] |
**user** | **String** | The user's wallet address | [required] |
**status** | Option<[**PositionStatus**](PositionStatus.md)> | Filter positions by status: \"open\", \"closed\", or \"all\" (default: \"all\") |  |
**page** | Option<**i32**> | Page number for pagination (minimum: 1, default: 1) |  |
**page_size** | Option<**i32**> | Page size for pagination (minimum: 1, maximum: 100, default: 20) |  |

### Return type

[**models::GetPoolPositionPnLResponse**](GetPoolPositionPnLResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_position_historical_events

> models::GetPositionHistoricalEventsResponse get_position_historical_events(address, event_type, order_direction)
Get the historical events for a position

This endpoint returns the historical actions for a position.  # Arguments  * `address` - The address of the position  # Returns  * `200` - The historical actions for the position

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**address** | **String** |  | [required] |
**event_type** | Option<**String**> | Filter by event type (add, remove, claim_fee, claim_reward). If not provided, returns all event types. |  |
**order_direction** | Option<**String**> | Order direction for sorting events by block time. - `asc`: Oldest events first - `desc`: Most recent events first (default) |  |

### Return type

[**models::GetPositionHistoricalEventsResponse**](GetPositionHistoricalEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

