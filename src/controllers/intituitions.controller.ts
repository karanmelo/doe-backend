import { Controller, Get, Injectable } from '@nestjs/common';

import { routesConfig } from 'src/configs/routes.config';
import { InstitutionsService } from 'src/services/institutions.service';

@Injectable()
@Controller(routesConfig.institutions._)
export class InstitutionsConroller {
  constructor(private institutionsService: InstitutionsService) {}

  @Get(routesConfig.institutions.list)
  async getInstituitions(): Promise<any> {
    return this.institutionsService.list();
  }
}
