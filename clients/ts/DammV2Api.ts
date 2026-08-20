import { PoolsApi, StatsApi } from "../../generated/ts/damm-v2/apis";
import { Configuration } from "../../generated/ts/damm-v2/runtime";
import { type ApiClientOptions, resolveBaseUrl } from "./config";

export type DammV2ApiOptions = ApiClientOptions;

export class DammV2Api {
  public readonly pools: PoolsApi;
  public readonly stats: StatsApi;

  public constructor(options: DammV2ApiOptions = {}) {
    const configuration = new Configuration({
      basePath: resolveBaseUrl(options, "https://damm-v2.datapi.meteora.ag"),
      fetchApi: options.fetch,
      headers: options.headers,
    });

    this.pools = new PoolsApi(configuration);
    this.stats = new StatsApi(configuration);
  }
}
