import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { InstitutionDocument } from 'src/core/domain/entities';
import { InstitutionsPort } from 'src/core/ports';
import { CreateInstitutionDto, InstitutionDto } from 'src/userInterface/dtos';

@Injectable()
export class CreateInstitutionService {
  constructor(private institutionsProvider: InstitutionsPort) {}

  async execute(
    institutionDto: CreateInstitutionDto,
    // files: Array<Express.Multer.File>,
  ): Promise<InstitutionDto> {
    try {
      const institution = await this.institutionsProvider.create(
        institutionDto,
      );

      return new InstitutionDto(institution as InstitutionDocument);
    } catch (error) {
      const errorMessage = `Error trying to save institution data. ${error.message}.`;

      throw new InternalServerErrorException(errorMessage);
    }
  }
}
