import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { ChallengeAuthenticatorService } from 'src/core/service/commands/';
import { routesConfig } from 'src/infrastructure/configs/routes.config';
import { LocalAuthGuard } from 'src/infrastructure/plugins/auth/guards/local-auth.guard';
import { ChallengeAuthenticatorRequestDto } from 'src/userInterface/dtos/';

@Controller(routesConfig.challenge._)
export class ChallengeController {
  constructor(
    private challengeAuthenticatorService: ChallengeAuthenticatorService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post(routesConfig.challenge.authenticate)
  async authenticate(
    @Body() request: ChallengeAuthenticatorRequestDto,
  ): Promise<{
    accessToken: string;
  }> {
    return this.challengeAuthenticatorService.execute(request);
  }
}
