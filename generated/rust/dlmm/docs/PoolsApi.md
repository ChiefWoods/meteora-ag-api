# \PoolsApi

All URIs are relative to *https://dlmm.datapi.meteora.ag*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_group**](PoolsApi.md#get_group) | **GET** /pools/groups/{lexical_order_mints} | Group
[**get_groups**](PoolsApi.md#get_groups) | **GET** /pools/groups | Groups
[**get_historical_volume**](PoolsApi.md#get_historical_volume) | **GET** /pools/{address}/volume/history | Historical Volume
[**get_ohlcv**](PoolsApi.md#get_ohlcv) | **GET** /pools/{address}/ohlcv | OHLCV
[**get_pool**](PoolsApi.md#get_pool) | **GET** /pools/{address} | Pool
[**get_pools**](PoolsApi.md#get_pools) | **GET** /pools | Pools



## get_group

> models::PaginationResponsePoolResponse get_group(lexical_order_mints, page, page_size, query, sort_by, filter_by)
Group

 Returns a paginated list of pools that belong to a specific pool group

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**lexical_order_mints** | **String** |  | [required] |
**page** | Option<**i32**> | Page number (1-based) |  |
**page_size** | Option<**i32**> | Number of pools to return per page. Max 100 |  |
**query** | Option<**String**> | Search query used to match pools by name, tokens, or address |  |
**sort_by** | Option<**String**> | Sort results by one or more fields  Format: - Time-windowed metrics: `<metric>_<window>:<direction>` - Non-windowed metrics: `<field>:<direction>`  - `direction`: `asc` or `desc` - `window` (when applicable): `5m` `30m` `1h` `2h` `4h` `12h` `24h`  Available fields: - Time-windowed metrics: `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Non-windowed metrics: `tvl` `fee_pct` `bin_step` `pool_created_at` `farm_apy`  Default: `volume_24h:desc`  Examples: - `volume_24h:desc` - `fee_1h:asc` - `tvl:desc` |  |
**filter_by** | Option<**String**> | Conditions to filter documents by field values  Format: `<expr> [&& <expr> ...]`  Where each expression is: `<field><op><value>`  Allowed fields: - Numeric: `tvl` `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Boolean: `is_blacklisted` - Text: `pool_address` `name` `token_x` `token_y`  Operators: - Numeric: `=` `>` `>=` `<` `<=` - Boolean: `=true` `=false` - Text:   - exact match: `=<value>`   - multi-value OR: `=[value1|value2|...]`  Notes: - Multiple expressions are combined using logical **AND** (`&&`) - Whitespace around operators is ignored  Examples: - `tvl>1000` - `is_blacklisted=false && volume_24h>=50000` |  |

### Return type

[**models::PaginationResponsePoolResponse**](PaginationResponse_PoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_groups

> models::PaginationResponseGroupResponse get_groups(page, page_size, query, sort_by, filter_by, volume_tw, fee_tvl_ratio_tw)
Groups

Returns a paginated list of pool groups

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<**i32**> | Page number (1-based) |  |
**page_size** | Option<**i32**> | Number of pools to return per page. Max 100 |  |
**query** | Option<**String**> | Search query used to match pools by name, tokens, or address |  |
**sort_by** | Option<**String**> | Sort results by one or more fields  Format: - Time-windowed metrics: `<metric>_<window>:<direction>` - Non-windowed metrics: `<field>:<direction>`  - `direction`: `asc` or `desc` - `window` (when applicable): `5m` `30m` `1h` `2h` `4h` `12h` `24h`  Available fields: - Time-windowed metrics: `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Non-windowed metrics: `tvl` `fee_pct` `bin_step` `pool_created_at` `farm_apy`  Default: `volume_24h:desc`  Examples: - `volume_24h:desc` - `fee_1h:asc` - `tvl:desc` |  |
**filter_by** | Option<**String**> | Conditions to filter documents by field values  Format: `<expr> [&& <expr> ...]`  Where each expression is: `<field><op><value>`  Allowed fields: - Numeric: `tvl` `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Boolean: `is_blacklisted` - Text: `pool_address` `name` `token_x` `token_y`  Operators: - Numeric: `=` `>` `>=` `<` `<=` - Boolean: `=true` `=false` - Text:   - exact match: `=<value>`   - multi-value OR: `=[value1|value2|...]`  Notes: - Multiple expressions are combined using logical **AND** (`&&`) - Whitespace around operators is ignored  Examples: - `tvl>1000` - `is_blacklisted=false && volume_24h>=50000` |  |
**volume_tw** | Option<**String**> | Time window to aggregate volume. Returns sum |  |[default to volume_24h]
**fee_tvl_ratio_tw** | Option<**String**> | Time window to aggregate fee tvl ratio. Returns Max |  |[default to fee_tvl_ratio_24h]

### Return type

[**models::PaginationResponseGroupResponse**](PaginationResponse_GroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_historical_volume

> models::TimeseriesResponseVolumeHistoryResponse get_historical_volume(address, timeframe, start_time, end_time)
Historical Volume

Returns historical volume for a pool aggregated into time buckets  **Notes** - If both `start_time` and `end_time` are provided, the result covers the range `[start_time, end_time]` - If only one of `start_time` or `end_time` is provided, the missing bound is inferred using the selected `timeframe` - If neither is provided, a default range is used based on `timeframe`

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**address** | **String** | Base58-encoded pool address | [required] |
**timeframe** | Option<**String**> | Timeframe  Allowed values `5m` `30m` `1h` `2h` `4h` `12h` `24h`  If omitted, the API uses `24h` |  |
**start_time** | Option<**i32**> | Unix timestamp in seconds (inclusive)  If omitted, the API uses a default range based on `timeframe` |  |
**end_time** | Option<**i32**> | Unix timestamp in seconds (inclusive)  If omitted, the API uses \"now\" as the end |  |

### Return type

[**models::TimeseriesResponseVolumeHistoryResponse**](TimeseriesResponse_VolumeHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_ohlcv

> models::TimeseriesResponseOhlcvResponse get_ohlcv(address, timeframe, start_time, end_time)
OHLCV

Returns OHLCV candles for a single pool over a time range  **Notes** - If both `start_time` and `end_time` are provided, candles are returned in the range `[start_time, end_time]` - If only one of `start_time` or `end_time` is provided, the missing bound is inferred using the selected `timeframe` - If neither is provided, a default range is used based on `timeframe`

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**address** | **String** | Base58-encoded pool address | [required] |
**timeframe** | Option<**String**> | Candle interval  Allowed values `5m` `30m` `1h` `2h` `4h` `12h` `24h`  If omitted, the API uses `24h` |  |[default to 24h]
**start_time** | Option<**i32**> | Unix timestamp in seconds (inclusive)  If omitted, the API uses a default range based on `timeframe` |  |
**end_time** | Option<**i32**> | Unix timestamp in seconds (inclusive)  If omitted, the API uses \"now\" as the end |  |

### Return type

[**models::TimeseriesResponseOhlcvResponse**](TimeseriesResponse_OHLCVResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pool

> models::PoolResponse get_pool(address)
Pool

Returns metadata and current state for a single pool

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**address** | **String** | Base58-encoded pool address | [required] |

### Return type

[**models::PoolResponse**](PoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pools

> models::GetPools200Response get_pools(page, page_size, query, sort_by, filter_by)
Pools

Returns a paginated list of pools

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<**i32**> | Page number (1-based) |  |
**page_size** | Option<**i32**> | Number of pools to return per page. Max 1000 |  |
**query** | Option<**String**> | Search query used to match pools by name, tokens, or address |  |
**sort_by** | Option<**String**> | Sort results by one or more fields  Format: - Time-windowed metrics: `<metric>_<window>:<direction>` - Non-windowed metrics: `<field>:<direction>`  - `direction`: `asc` or `desc` - `window` (when applicable): `5m` `30m` `1h` `2h` `4h` `12h` `24h`  Available fields: - Time-windowed metrics: `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Non-windowed metrics: `tvl` `fee_pct` `bin_step` `pool_created_at` `farm_apy`  Default: `volume_24h:desc`  Examples: - `volume_24h:desc` - `fee_1h:asc` - `tvl:desc` |  |
**filter_by** | Option<**String**> | Conditions to filter documents by field values  Format: `<expr> [&& <expr> ...]`  Where each expression is: `<field><op><value>`  Allowed fields: - Numeric: `tvl` `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Boolean: `is_blacklisted` - Text: `pool_address` `name` `token_x` `token_y`  Operators: - Numeric: `=` `>` `>=` `<` `<=` - Boolean: `=true` `=false` - Text:   - exact match: `=<value>`   - multi-value OR: `=[value1|value2|...]`  Notes: - Multiple expressions are combined using logical **AND** (`&&`) - Whitespace around operators is ignored  Examples: - `tvl>1000` - `is_blacklisted=false && volume_24h>=50000` |  |

### Return type

[**models::GetPools200Response**](Get_Pools_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

