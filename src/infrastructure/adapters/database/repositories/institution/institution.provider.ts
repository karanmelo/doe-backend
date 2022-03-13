import { Provider } from '@nestjs/common';

import { InstitutionsDataPort } from 'src/core/ports';
import { InstitutionsRepository } from 'src/infrastructure/adapters/database/repositories/institution/institution.repository';

export const InstitutionsProvider: Provider<InstitutionsDataPort> = {
  provide: InstitutionsDataPort,
  useClass: InstitutionsRepository,
};
