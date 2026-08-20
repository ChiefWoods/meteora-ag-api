import { APYApi, VaultsApi, VirtualPriceApi } from "../../generated/ts/dynamic-vault/apis";
import { Configuration } from "../../generated/ts/dynamic-vault/runtime";
import { type ApiClientOptions, resolveBaseUrl } from "./config";

export type DynamicVaultApiOptions = ApiClientOptions;

export class DynamicVaultApi {
  public readonly apy: APYApi;
  public readonly vaults: VaultsApi;
  public readonly virtualPrice: VirtualPriceApi;

  public constructor(options: DynamicVaultApiOptions = {}) {
    const configuration = new Configuration({
      basePath: resolveBaseUrl(options, "https://merv2-api.meteora.ag"),
      fetchApi: options.fetch,
      headers: options.headers,
    });

    this.apy = new APYApi(configuration);
    this.vaults = new VaultsApi(configuration);
    this.virtualPrice = new VirtualPriceApi(configuration);
  }
}
