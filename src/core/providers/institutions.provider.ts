import { Provider } from '@nestjs/common';

import { InsitutionDocument } from 'src/core/domain/entities';
import { InstitutionsRepository } from 'src/infrastructure/adapters/repositories/institutions.repository';
import { CreateInstitutionDto } from 'src/userInterface/dtos';

export abstract class InstitutionsData {
  get: () => Promise<InsitutionDocument[]>;
  getById: (institutionId: string) => Promise<InsitutionDocument>;
  create: (
    createInstitutionDto: CreateInstitutionDto,
  ) => Promise<InsitutionDocument>;
}

export const InstitutionsProvider: Provider<InstitutionsData> = {
  provide: InstitutionsData,
  useClass: InstitutionsRepository,
};
