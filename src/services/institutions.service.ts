import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CreateInstitutionDto, InstitutionDto } from 'src/common/dtos';
import { Institution } from 'src/entities';
import { InstitutionsData } from 'src/providers';

@Injectable()
export class InstitutionsService {
  constructor(private institutionsProvider: InstitutionsData) {}

  async get(): Promise<InstitutionDto[]> {
    const institutions = await this.institutionsProvider.get();

    return institutions.map(
      (institution: Institution) => new InstitutionDto(institution as any),
    );
  }

  async getById(institutionId: string): Promise<InstitutionDto> {
    try {
      const institution = await this.institutionsProvider.getById(
        institutionId,
      );

      return new InstitutionDto(institution as any);
    } catch (error) {
      const errorMessage = `Error trying to get institution data for ID ${institutionId}. ${error.message}.`;

      throw new InternalServerErrorException(errorMessage);
    }
  }

  async create(
    institutionDto: CreateInstitutionDto,
    // files: Array<Express.Multer.File>,
  ): Promise<InstitutionDto> {
    try {
      const institution = await this.institutionsProvider.create(
        institutionDto,
      );

      return new InstitutionDto(institution);
    } catch (error) {
      const errorMessage = `Error trying to save institution data. ${error.message}.`;

      throw new InternalServerErrorException(errorMessage);
    }
  }
}
