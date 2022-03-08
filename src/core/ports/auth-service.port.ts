import { IAuthenticator, ISignInResponse } from 'src/core/commons/interfaces';

export abstract class AuthServicePort {
  validate: (authData: IAuthenticator) => Promise<boolean>;
  signIn: (authData: IAuthenticator) => Promise<ISignInResponse>;
}
