# StrategyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubkey** | **String** | Strategy public key address | 
**reserve** | **String** | Reserve address associated with the strategy | 
**strategy_type** | **StrategyType** | Type of strategy (e.g., Solend, Kamino, MarginFi) (enum: Solend, Kamino, MarginFi, Unknown) | 
**strategy_name** | **String** | Human-readable strategy name | 
**liquidity** | **i32** | Current liquidity in this strategy | 
**max_allocation** | **f64** | Maximum allocation percentage for this strategy | 
**isolated** | **bool** | Whether this strategy is isolated from optimization | 
**disabled** | **bool** | Whether this strategy is currently disabled | 
**safe_utilization_threshold** | **f64** | Safe utilization threshold percentage | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


