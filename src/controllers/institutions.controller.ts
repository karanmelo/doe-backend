import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';

import { InstitutionDto, CreateInstitutionDto } from 'src/common/dtos';
import { routesConfig } from 'src/configs/routes.config';
import { InstitutionsService } from 'src/services/institutions.service';

@Injectable()
@Controller(routesConfig.institutions._)
export class InstitutionsConroller {
  constructor(private institutionsService: InstitutionsService) {}

  @Get(routesConfig.institutions.get)
  async get(): Promise<InstitutionDto[]> {
    return this.institutionsService.get();
  }

  @Get(routesConfig.institutions.getById)
  async getById(@Param('id') institutionId: string): Promise<InstitutionDto> {
    return this.institutionsService.getById(institutionId);
  }

  @Post(routesConfig.institutions.create)
  async create(
    @Body() institutionDto: CreateInstitutionDto,
  ): Promise<InstitutionDto> {
    return this.institutionsService.create(institutionDto);
  }
}
