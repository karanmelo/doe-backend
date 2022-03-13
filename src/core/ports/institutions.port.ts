import { CreateInstitutionDto } from 'src/core/dtos';
import { Institution } from 'src/domain/entities';

export abstract class InstitutionsDataPort {
  get: () => Promise<Institution[]>;

  getById: (institutionId: string) => Promise<Institution>;

  create: (createInstitutionDto: CreateInstitutionDto) => Promise<Institution>;
}
