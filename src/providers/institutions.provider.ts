import { Provider } from '@nestjs/common';

import { InsitutionDocument } from 'src/entities';
import { InstitutionsRepository } from 'src/repositories/institutions.repository';

export abstract class InstitutionsData {
  getAll: () => Promise<InsitutionDocument[]>;
  getById: (institutionId: string) => Promise<InsitutionDocument>;
}

export const InstitutionsProvider: Provider<InstitutionsData> = {
  provide: InstitutionsData,
  useClass: InstitutionsRepository,
};
