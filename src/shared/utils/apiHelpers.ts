import camelcaseKeys from "camelcase-keys";
import * as changeCase from "change-case";

export const combinePath = (route: string, path: (string | number)[] = []) => {
  return `${route}${path.join("/")}`;
};

export function isApiError(error: unknown): error is ApiErrorResponse {
  // eslint-disable-next-line space-unary-ops
  return typeof error === "object" && error !== null && "data" in error && typeof (error as any).data === "object";
}

export function isApiResponse(response: unknown): response is Response {
  return (
    typeof response === "object" &&
    response !== null &&
    "data" in response &&
    // eslint-disable-next-line space-unary-ops
    typeof (response.data as any).accessToken === "string"
  );
}

export function decodeJWTToken(token: string): DecodedJWTToken | null {
  try {
    const [, base64Url] = token.split(".");
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export function getUserIdFromToken(token: string): string {
  const decodedToken = decodeJWTToken(token);
  return decodedToken?.sub || "";
}

/** Функция которая преобразует snake_case в camelCase*/
export function changeCaseQuery(
  response: any,
  {
    currentPath = "",
    whiteListApi = [],
    blackListApi = [],
    blackListApiRegExp,
    adapter = camelcaseKeys,
  }: ChangeCaseQuery = {},
) {
  if (
    typeof response !== "object" ||
    blackListApi.includes(currentPath) ||
    (blackListApiRegExp && blackListApiRegExp.test(currentPath)) ||
    (whiteListApi.length > 0 && !whiteListApi.includes(currentPath))
  ) {
    return response;
  }

  try {
    if (response instanceof FormData) {
      const FD = new FormData();
      response.forEach((value, key) => {
        FD.append(changeCase.snakeCase(key), value);
      });

      return FD;
    }

    return Array.isArray(response) ? response.map((x) => adapter(x, { deep: true })) : adapter(response, { deep: true });
  } catch (e) {
    return response;
  }
}
