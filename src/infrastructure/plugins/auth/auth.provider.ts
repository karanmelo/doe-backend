import { Provider } from '@nestjs/common';

import { AuthServicePort } from 'src/core/ports';
import { AuthService } from 'src/infrastructure/plugins/auth/auth.service';

export const AuthServiceProvider: Provider<AuthServicePort> = {
  provide: AuthServicePort,
  useClass: AuthService,
};
