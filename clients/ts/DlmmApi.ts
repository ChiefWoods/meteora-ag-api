import {
  LimitOrdersApi,
  PoolsApi,
  PortfolioApi,
  PositionsApi,
  StatsApi,
  WalletsApi,
} from "../../generated/ts/dlmm/apis";
import { Configuration } from "../../generated/ts/dlmm/runtime";
import { type ApiClientOptions, resolveBaseUrl } from "./config";

export type DlmmApiOptions = ApiClientOptions;

export class DlmmApi {
  public readonly limitOrders: LimitOrdersApi;
  public readonly pools: PoolsApi;
  public readonly portfolio: PortfolioApi;
  public readonly positions: PositionsApi;
  public readonly stats: StatsApi;
  public readonly wallets: WalletsApi;

  public constructor(options: DlmmApiOptions = {}) {
    const configuration = new Configuration({
      basePath: resolveBaseUrl(options, "https://dlmm.datapi.meteora.ag"),
      fetchApi: options.fetch,
      headers: options.headers,
    });

    this.limitOrders = new LimitOrdersApi(configuration);
    this.pools = new PoolsApi(configuration);
    this.portfolio = new PortfolioApi(configuration);
    this.positions = new PositionsApi(configuration);
    this.stats = new StatsApi(configuration);
    this.wallets = new WalletsApi(configuration);
  }
}
