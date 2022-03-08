import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { ChallengeController, InstitutionsConroller } from 'src/controllers';
import { InstitutionRepositoryModule } from 'src/infrastructure/adapters/database/repositories/institution/institution.module';
import { serviceConfig } from 'src/infrastructure/configs/service.config';
import { MulterConfigService } from 'src/infrastructure/plugins';
import { AuthPluginModule } from 'src/infrastructure/plugins/auth/auth.module';
import {
  CreateInstitutionService,
  ChallengeAuthenticatorService,
} from 'src/service/commands';
import { InstitutionsService } from 'src/service/queries';

@Module({
  imports: [
    AuthPluginModule,
    MongooseModule.forRoot(serviceConfig.mongoUrl),
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
    InstitutionRepositoryModule,
  ],
  controllers: [ChallengeController, InstitutionsConroller],
  providers: [
    InstitutionsService,
    CreateInstitutionService,
    ChallengeAuthenticatorService,
  ],
})
export class AppModule {}
