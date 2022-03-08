import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { InstitutionDto } from 'src/core/dtos';
import { InstitutionsDataPort } from 'src/core/ports';
import { Institution } from 'src/domain/entities';

@Injectable()
export class InstitutionsService {
  constructor(private institutionsProvider: InstitutionsDataPort) {}

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
}
