import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthenticatorRequestDto, SignInResponseDto } from 'src/core/dtos/';
import { routesConfig } from 'src/infrastructure/configs/routes.config';
import { LocalAuthGuard } from 'src/infrastructure/plugins/auth/guards/local-auth.guard';
import { ChallengeAuthenticatorService } from 'src/service/commands/';

@ApiTags('Challenge')
@Controller(routesConfig.challenge._)
export class ChallengeController {
  constructor(
    private challengeAuthenticatorService: ChallengeAuthenticatorService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post(routesConfig.challenge.authenticate)
  async authenticate(
    @Body() request: AuthenticatorRequestDto,
  ): Promise<SignInResponseDto> {
    return this.challengeAuthenticatorService.execute(request);
  }
}
