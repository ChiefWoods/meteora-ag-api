import { AlphaVaultApi, FeeConfigsApi, PoolsApi } from "../../generated/ts/damm-v1/apis";
import { Configuration } from "../../generated/ts/damm-v1/runtime";
import { type ApiClientOptions, resolveBaseUrl } from "./config";

export type DammV1ApiOptions = ApiClientOptions;

export class DammV1Api {
  public readonly alphaVault: AlphaVaultApi;
  public readonly feeConfigs: FeeConfigsApi;
  public readonly pools: PoolsApi;

  public constructor(options: DammV1ApiOptions = {}) {
    const configuration = new Configuration({
      basePath: resolveBaseUrl(options, "https://damm-api.meteora.ag"),
      fetchApi: options.fetch,
      headers: options.headers,
    });

    this.alphaVault = new AlphaVaultApi(configuration);
    this.feeConfigs = new FeeConfigsApi(configuration);
    this.pools = new PoolsApi(configuration);
  }
}
