import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { serviceConfig } from 'src/configs/service.config';
import { InstitutionsConroller } from 'src/controllers';
import { Institution, InstitutionSchema } from 'src/entities';
import { MulterConfigService } from 'src/plugins';
import { InstitutionsProvider } from 'src/providers';
import { InstitutionsService } from 'src/services';

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
  providers: [InstitutionsProvider, InstitutionsService],
  controllers: [InstitutionsConroller],
})
export class AppModule {}
