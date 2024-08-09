import Cookies from "js-cookie";

import AuthEndpoints from "@/app/api/auth/endpoints";
import ApiMicroservices from "@/app/consts/ApiMicroservices";

import ContentTypes from "../consts/contentTypes";

let inProgress: Promise<string> | null;

export const Token: Token = {
  setTokensApp({ accessToken, refreshToken }) {
    if (accessToken) Cookies.set("access_token", accessToken);
    if (refreshToken) Cookies.set("refresh_token", refreshToken);
    return true;
  },
  getTokens() {
    const accessToken = Cookies.get("access_token") || "";
    const refreshToken = Cookies.get("refresh_token") || "";
    return { accessToken, refreshToken };
  },
  refreshToken(isSetAppToken = true) {
    if (inProgress) return inProgress;

    const refresh = async () => {
      const { refreshToken } = this.getTokens();
      if (!refreshToken) return "";

      const headers = new Headers();
      this.setAuthHeader({ headers });
      headers.set("Content-Type", ContentTypes.APPLICATION_JSON);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${ApiMicroservices.USERS}${AuthEndpoints.REFRESH}`, {
          body: JSON.stringify({ refresh_token: refreshToken }),
          method: "POST",
          headers,
        });

        if (response.status === 200) {
          const data = await response.json();
          if (!data.access_token) return "";

          isSetAppToken && this.setTokensApp({ accessToken: data.access_token, refreshToken: data.refresh_token });
          return data.access_token || "";
        }

        return "";
      } catch {
        return "";
      } finally {
        inProgress = null;
      }
    };
    inProgress = refresh();

    return inProgress;
  },

  setAuthHeader({ accessToken = "", headers = new Headers(), typeToken = "Bearer" } = {}) {
    const token = accessToken || this.getTokens().accessToken;
    if (token) headers.set("Authorization", `${typeToken} ${token}`);
    return headers;
  },
};
