import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { InstitutionDto } from 'src/common/dtos';
import { Institution } from 'src/entities';
import { InstitutionsData } from 'src/providers';

@Injectable()
export class InstitutionsService {
  constructor(private institutionsProvider: InstitutionsData) {}

  async getAll(): Promise<InstitutionDto[]> {
    const institutions = await this.institutionsProvider.getAll();

    return institutions.map(
      (institution: Institution) => new InstitutionDto(institution as any),
    );
  }

  async getById(institutionId): Promise<InstitutionDto> {
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
}
