import { AnalyticsApi, VaultApi } from "../../generated/ts/stake2earn/apis";
import { Configuration } from "../../generated/ts/stake2earn/runtime";
import { type ApiClientOptions, resolveBaseUrl } from "./config";

export type Stake2EarnApiOptions = ApiClientOptions;

export class Stake2EarnApi {
  public readonly analytics: AnalyticsApi;
  public readonly vaults: VaultApi;

  public constructor(options: Stake2EarnApiOptions = {}) {
    const configuration = new Configuration({
      basePath: resolveBaseUrl(options, "https://stake-for-fee-api.meteora.ag"),
      fetchApi: options.fetch,
      headers: options.headers,
    });

    this.analytics = new AnalyticsApi(configuration);
    this.vaults = new VaultApi(configuration);
  }
}
