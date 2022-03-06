import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IChallengeAuthenticator } from 'src/core/commons/interfaces/';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validate(clientId: string, clienteToken: string): Promise<boolean> {
    if (
      clientId !== process.env.CHALLENGE_CLIENT_ID ||
      clienteToken !== process.env.CHALLENGE_CLIENT_TOKEN
    )
      return false;
    return true;
  }

  async signIn(
    challengeAuthenticator: IChallengeAuthenticator,
  ): Promise<{ accessToken: string }> {
    return {
      accessToken: this.jwtService.sign(challengeAuthenticator),
    };
  }
}
