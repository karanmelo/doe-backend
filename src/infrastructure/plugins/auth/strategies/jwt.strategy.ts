import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { IAuthenticator } from 'src/core/commons/interfaces';
import { serviceConfig } from 'src/infrastructure/configs/service.config';

import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: serviceConfig.jwtSecret,
    });
  }

  async validate(payload: IAuthenticator) {
    const validated = await this.authService.validate(payload);
    if (!validated) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}
