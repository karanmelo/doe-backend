import { Controller, Get, Injectable, Param } from '@nestjs/common';

import { InstitutionDto } from 'src/commons/dtos';
import { routesConfig } from 'src/configs/routes.config';
import { InstitutionsService } from 'src/services/institutions.service';

@Injectable()
@Controller(routesConfig.institutions._)
export class InstitutionsConroller {
  constructor(private institutionsService: InstitutionsService) {}

  @Get(routesConfig.institutions.list)
  async getInstituitions(): Promise<InstitutionDto[]> {
    return this.institutionsService.getAll();
  }

  @Get(routesConfig.institutions.getById + ':id')
  async getInstituitionById(@Param('id') id: string): Promise<InstitutionDto> {
    return this.institutionsService.getById(id);
  }
}
