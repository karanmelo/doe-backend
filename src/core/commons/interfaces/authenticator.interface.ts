export interface IAuthenticator {
  clientId: string;
  clientToken: string;
}

export interface ISignInResponse {
  accessToken: string;
}
