import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IAuthenticator, ISignInResponse } from 'src/core/commons/interfaces/';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validate(authData: IAuthenticator): Promise<boolean> {
    if (
      authData.clientId !== process.env.CHALLENGE_CLIENT_ID ||
      authData.clientToken !== process.env.CHALLENGE_CLIENT_TOKEN
    )
      return false;
    return true;
  }

  async signIn(authData: IAuthenticator): Promise<ISignInResponse> {
    const { clientId, clientToken } = authData;

    const payload: IAuthenticator = {
      clientId,
      clientToken,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
