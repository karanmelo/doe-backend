import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class ChallengeAuthenticatorRequestDto {
  @ApiProperty()
  @IsString()
  clientId: string;

  @ApiProperty()
  @IsString()
  clientToken: string;
}
