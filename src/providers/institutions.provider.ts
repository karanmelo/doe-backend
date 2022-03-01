import { Provider } from '@nestjs/common';

import { CreateInstitutionDto } from 'src/common/dtos';
import { InsitutionDocument } from 'src/entities';
import { InstitutionsRepository } from 'src/repositories/institutions.repository';

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
