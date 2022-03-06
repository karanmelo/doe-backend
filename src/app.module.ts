import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { Institution, InstitutionSchema } from 'src/core/domain/entities';
import { InstitutionsProvider } from 'src/core/providers';
import { InstitutionsService } from 'src/core/service/queries';
import { serviceConfig } from 'src/infrastructure/configs/service.config';
import { MulterConfigService } from 'src/infrastructure/plugins';
import { InstitutionsConroller } from 'src/userInterface/controllers';

import { CreateInstitutionService } from './core/service/commands';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Institution.name, schema: InstitutionSchema },
    ]),
    MongooseModule.forRoot(serviceConfig.mongoUrl),
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
  ],
  providers: [
    InstitutionsProvider,
    InstitutionsService,
    CreateInstitutionService,
  ],
  controllers: [InstitutionsConroller],
})
export class AppModule {}
