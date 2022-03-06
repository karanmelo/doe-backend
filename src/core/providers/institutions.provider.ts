import { Provider } from '@nestjs/common';

import { InstitutionsPort } from 'src/core/ports';
import { InstitutionsRepository } from 'src/infrastructure/adapters/repositories/institutions.repository';

export const InstitutionsProvider: Provider<InstitutionsPort> = {
  provide: InstitutionsPort,
  useClass: InstitutionsRepository,
};
