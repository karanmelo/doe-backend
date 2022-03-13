import { Injectable } from '@nestjs/common';

import { ISignInResponse } from 'src/core/commons/interfaces';
import { AuthenticatorRequestDto } from 'src/core/dtos/';
import { AuthServicePort } from 'src/core/ports';

@Injectable()
export class ChallengeAuthenticatorService {
  constructor(private authServiceProvider: AuthServicePort) {}

  execute(
    challengeAuthenticatorRequestDto: AuthenticatorRequestDto,
  ): Promise<ISignInResponse> {
    return this.authServiceProvider.signIn(challengeAuthenticatorRequestDto);
  }
}
