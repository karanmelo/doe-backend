import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class AuthenticatorRequestDto {
  @ApiProperty()
  @IsString()
  clientId: string;

  @ApiProperty()
  @IsString()
  clientToken: string;
}

export class SignInResponseDto {
  @ApiProperty()
  @IsString()
  accessToken: string;
}
