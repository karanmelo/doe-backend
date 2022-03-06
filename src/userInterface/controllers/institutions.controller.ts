import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

import { CreateInstitutionService } from 'src/core/service/commands';
import { InstitutionsService } from 'src/core/service/queries';
import { routesConfig } from 'src/infrastructure/configs/routes.config';
import { InstitutionDto, CreateInstitutionDto } from 'src/userInterface/dtos';

@Injectable()
@Controller(routesConfig.institutions._)
export class InstitutionsConroller {
  constructor(
    private institutionsService: InstitutionsService,
    private createInstitutionService: CreateInstitutionService,
  ) {}

  @Get(routesConfig.institutions.get)
  async get(): Promise<InstitutionDto[]> {
    return this.institutionsService.get();
  }

  @Get(routesConfig.institutions.getById)
  async getById(@Param('id') institutionId: string): Promise<InstitutionDto> {
    return this.institutionsService.getById(institutionId);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Post(routesConfig.institutions.create)
  async create(
    @Body() institutionDto: CreateInstitutionDto,
    // @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<InstitutionDto> {
    return this.createInstitutionService.execute(institutionDto);
    // return this.institutionsService.create(institutionDto, files);
  }
}