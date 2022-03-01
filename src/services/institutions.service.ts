import { Injectable } from '@nestjs/common';

import { InstitutionDto } from 'src/commons/dtos';
import { Institution } from 'src/entities';
import { InstitutionsData } from 'src/providers';

@Injectable()
export class InstitutionsService {
  constructor(private institutionsProvider: InstitutionsData) {}

  async list(): Promise<InstitutionDto[]> {
    const institutions = await this.institutionsProvider.getAll();

    return institutions.map(
      (institution: Institution) => new InstitutionDto(institution),
    );
  }
}
