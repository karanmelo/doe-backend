import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CreateInstitutionDto, InstitutionDto } from 'src/core/dtos';
import { InstitutionsDataPort } from 'src/core/ports';

@Injectable()
export class CreateInstitutionService {
  constructor(private institutionsProvider: InstitutionsDataPort) {}

  async execute(
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
