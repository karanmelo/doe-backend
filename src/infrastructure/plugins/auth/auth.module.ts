import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthServicePort } from 'src/core/ports';
import { serviceConfig } from 'src/infrastructure/configs/service.config';
import {
  LocalStrategy,
  JwtStrategy,
  AuthService,
} from 'src/infrastructure/plugins/auth';
import { AuthServiceProvider } from 'src/infrastructure/plugins/auth/';

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
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthServiceProvider],
  exports: [AuthServicePort, AuthService],
})
export class AuthPluginModule {}
