import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "@/app/api/auth/api";
import { userApi } from "@/app/api/user/api";
import LocalStorage from "@/shared/consts/localStorage";
import { clearProfileStorage } from "@/shared/utils/localStorage";
import { Token } from "@/shared/utils/token";

const initialState: StoreUser.State = {
  ...Token.getTokens(),
  user: JSON.parse(localStorage.getItem(LocalStorage.USER) || "null"),
};

const updateAccessToken = (state: StoreUser.State, token: string) => {
  state.accessToken = token;
  Token.setTokensApp({ accessToken: token });
};

const updateUser = (state: StoreUser.State, user: StoreUser.User) => {
  state.user = user;
  localStorage.setItem(LocalStorage.USER, JSON.stringify(user));

  if (user) {
    const profiles: StoreUser.User[] = JSON.parse(localStorage.getItem(LocalStorage.PROFILES) || "[]");

    if (profiles.length) {
      const foundProfileIndex = profiles.findIndex((profile) => profile.id === user.id);
      if (foundProfileIndex === -1) {
        profiles.push(user);
      } else {
        profiles[foundProfileIndex] = user;
      }
    } else {
      profiles.push(user);
    }
    localStorage.setItem(LocalStorage.PROFILES, JSON.stringify(profiles));
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken(state, { payload: token }) {
      updateAccessToken(state, token);
    },
    setUser(state, { payload: user }) {
      updateUser(state, user);
    },
    logout(state) {
      clearProfileStorage();
      state.accessToken = "";
      state.refreshToken = "";
      state.user = null;
      Token.setTokensApp({ accessToken: "", refreshToken: "" });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      Token.setTokensApp({ accessToken: payload.accessToken, refreshToken: payload.refreshToken });
    });
    builder.addMatcher(authApi.endpoints.refresh.matchFulfilled, (state, { payload }) => {
      updateAccessToken(state, payload.accessToken);
    });
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload: user }) => {
      updateUser(state, user);
    });
  },
});

export const { logout, setAccessToken, setUser } = userSlice.actions;

export default userSlice.reducer;
