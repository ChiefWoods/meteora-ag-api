export interface ApiClientOptions {
  /** Override the product API's default base URL. */
  baseUrl?: string;
  /** Fetch implementation used by every generated API in this client. */
  fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
  /** Headers sent with every request made by this client. */
  headers?: Record<string, string>;
}

export function resolveBaseUrl(options: ApiClientOptions, defaultBaseUrl: string): string {
  const baseUrl = options.baseUrl ?? defaultBaseUrl;

  if (baseUrl.trim().length === 0) {
    throw new TypeError("baseUrl must not be blank");
  }

  return baseUrl;
}
