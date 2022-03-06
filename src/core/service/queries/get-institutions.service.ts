import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { Institution } from 'src/core/domain/entities';
import { InstitutionsPort } from 'src/core/ports';
import { InstitutionDto } from 'src/userInterface/dtos';

@Injectable()
export class InstitutionsService {
  constructor(private institutionsProvider: InstitutionsPort) {}

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
