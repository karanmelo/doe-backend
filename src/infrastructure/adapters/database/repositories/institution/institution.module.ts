import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InstitutionsDataPort } from 'src/core/ports';
import {
  InstitutionModel,
  InstitutionSchema,
} from 'src/infrastructure/adapters/database/models';
import { InstitutionFactory } from 'src/infrastructure/adapters/database/repositories/institution/institution.factory';
import { InstitutionsProvider } from 'src/infrastructure/adapters/database/repositories/institution/institution.provider';
import { InstitutionsRepository } from 'src/infrastructure/adapters/database/repositories/institution/institution.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InstitutionModel.name, schema: InstitutionSchema },
    ]),
  ],
  providers: [InstitutionFactory, InstitutionsRepository, InstitutionsProvider],
  exports: [InstitutionsDataPort, InstitutionFactory, InstitutionsRepository],
})
export class InstitutionRepositoryModule {}
