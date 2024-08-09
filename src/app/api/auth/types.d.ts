declare namespace ApiAuthRequest {
  export interface ChangePassword {
    userId: string;
    password: string;
  }
  export interface CheckEmail {
    email: string;
  }
  export interface Login {
    email: string;
    password: string;
  }
  export interface Refresh {
    refreshToken: string;
  }
  export interface ResetPassword {
    email: string;
  }
}

declare namespace ApiAuthResponse {
  export interface ChangePassword {
    accessToken: string;
    refreshToken: string;
  }
  export interface CheckEmail {
    accessToken: string;
    refreshToken: string;
  }
  export interface Login {
    accessToken: string;
    refreshToken: string;
  }
  export interface Refresh {
    accessToken: string;
  }
}
