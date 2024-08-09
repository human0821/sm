type SetAuthHeader = { accessToken?: string; headers?: Headers; typeToken?: "Bearer" | "Token" };
type SetTokensApp = { accessToken?: string; refreshToken?: string };
type GetTokens = { accessToken: string; refreshToken: string };

declare interface Token {
  setAuthHeader: (SetAuthHeader) => Headers;
  refreshToken: (isSetAppToken?: boolean) => Promise<string>;
  setTokensApp: (tokens: SetTokensApp) => boolean;
  getTokens: () => GetTokens;
}
