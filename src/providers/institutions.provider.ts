import { Provider } from '@nestjs/common';

import { Institution } from 'src/entities';
import { InstitutionsRepository } from 'src/repositories/institutions.repository';

export abstract class InstitutionsData {
  getAll: () => Promise<Institution[]>;
}

export const InstitutionsProvider: Provider<InstitutionsData> = {
  provide: InstitutionsData,
  useClass: InstitutionsRepository,
};
