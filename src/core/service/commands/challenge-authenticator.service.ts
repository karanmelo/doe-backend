import { Injectable } from '@nestjs/common';

import { AuthService } from 'src/infrastructure/plugins/auth/auth.service';
import { ChallengeAuthenticatorRequestDto } from 'src/userInterface/dtos/';

@Injectable()
export class ChallengeAuthenticatorService {
  constructor(private authService: AuthService) {}

  execute(
    challengeAuthenticatorRequestDto: ChallengeAuthenticatorRequestDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(challengeAuthenticatorRequestDto);
  }
}
