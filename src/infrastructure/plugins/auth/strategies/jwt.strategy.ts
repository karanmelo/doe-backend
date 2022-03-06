import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { serviceConfig } from 'src/infrastructure/configs/service.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: serviceConfig.jwtSecret,
    });
  }

  async validate(payload: any) {
    return { clientId: payload.clientId, clienteToken: payload.clienteToken };
  }
}
