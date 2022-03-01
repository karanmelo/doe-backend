import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { serviceConfig } from 'src/configs/service.config';
import { InstitutionsConroller } from 'src/controllers';
import { Institution, InstitutionSchema } from 'src/entities';
import { InstitutionsProvider } from 'src/providers';
import { InstitutionsService } from 'src/services/';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Institution.name, schema: InstitutionSchema },
    ]),
    MongooseModule.forRoot(serviceConfig.mongoUrl),
  ],
  providers: [InstitutionsProvider, InstitutionsService],
  controllers: [InstitutionsConroller],
})
export class AppModule {}
