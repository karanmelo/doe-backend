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

  @UseInterceptors(AnyFilesInterceptor())
  @Post(routesConfig.institutions.create)
  async create(
    @Body() institutionDto: CreateInstitutionDto,
    // @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<InstitutionDto> {
    return this.institutionsService.create(institutionDto);
    // return this.institutionsService.create(institutionDto, files);
  }
}
