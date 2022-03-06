import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-local';

import { AuthService } from 'src/infrastructure/plugins/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'clientId', passwordField: 'clientToken' });
  }

  async validate(clientId: string, clientToken: string): Promise<any> {
    const validated = await this.authService.validate(clientId, clientToken);
    if (!validated) {
      throw new UnauthorizedException();
    }
    return validated;
  }
}
