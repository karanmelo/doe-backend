import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { Institution, InstitutionSchema } from 'src/core/domain/entities';
import { InstitutionsProvider } from 'src/core/providers';
import {
  CreateInstitutionService,
  ChallengeAuthenticatorService,
} from 'src/core/service/commands';
import { InstitutionsService } from 'src/core/service/queries';
import { serviceConfig } from 'src/infrastructure/configs/service.config';
import { MulterConfigService } from 'src/infrastructure/plugins';
import { AuthPluginModule } from 'src/infrastructure/plugins/auth/auth.module';
import {
  ChallengeController,
  InstitutionsConroller,
} from 'src/userInterface/controllers';

@Module({
  imports: [
    AuthPluginModule,
    MongooseModule.forFeature([
      { name: Institution.name, schema: InstitutionSchema },
    ]),
    MongooseModule.forRoot(serviceConfig.mongoUrl),
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
  ],
  controllers: [ChallengeController, InstitutionsConroller],
  providers: [
    InstitutionsProvider,
    InstitutionsService,
    CreateInstitutionService,
    ChallengeAuthenticatorService,
  ],
})
export class AppModule {}
