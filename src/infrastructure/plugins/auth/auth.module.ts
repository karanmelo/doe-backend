import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { serviceConfig } from 'src/infrastructure/configs/service.config';
import {
  LocalStrategy,
  JwtStrategy,
  AuthService,
} from 'src/infrastructure/plugins/auth';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: serviceConfig.jwtSecret,
      signOptions: {
        expiresIn: serviceConfig.jwtExpiration,
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthPluginModule {}
