# GetGroupsQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_tvl_ratio_tw** | Option<**String**> | Time window to aggregate fee tvl ratio. Returns Max | [optional]
**filter_by** | Option<**String**> | Conditions to filter documents by field values  Format: `<expr> [&& <expr> ...]`  Where each expression is: `<field><op><value>`  Allowed fields: - Numeric: `tvl` `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Boolean: `is_blacklisted` - Text: `pool_address` `name` `token_x` `token_y`  Operators: - Numeric: `=` `>` `>=` `<` `<=` - Boolean: `=true` `=false` - Text:   - exact match: `=<value>`   - multi-value OR: `=[value1|value2|...]`  Notes: - Multiple expressions are combined using logical **AND** (`&&`) - Whitespace around operators is ignored  Examples: - `tvl>1000` - `is_blacklisted=false && volume_24h>=50000` | [optional]
**page** | Option<**i32**> | Page number (1-based) | [optional]
**page_size** | Option<**i32**> | Number of pools to return per page. Max 100 | [optional]
**query** | Option<**String**> | Search query used to match pools by name, tokens, or address | [optional]
**sort_by** | Option<**String**> | Sort results by one or more fields  Format: - Time-windowed metrics: `<metric>_<window>:<direction>` - Non-windowed metrics: `<field>:<direction>`  - `direction`: `asc` or `desc` - `window` (when applicable): `5m` `30m` `1h` `2h` `4h` `12h` `24h`  Available fields: - Time-windowed metrics: `volume_*` `fee_*` `fee_tvl_ratio_*` `apr_*` - Non-windowed metrics: `tvl` `fee_pct` `bin_step` `pool_created_at` `farm_apy`  Default: `volume_24h:desc`  Examples: - `volume_24h:desc` - `fee_1h:asc` - `tvl:desc` | [optional]
**volume_tw** | Option<**String**> | Time window to aggregate volume. Returns sum | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


