import { Institution } from 'src/core/domain/entities';
import { CreateInstitutionDto } from 'src/userInterface/dtos';

export abstract class InstitutionsPort {
  get: () => Promise<Institution[]>;
  getById: (institutionId: string) => Promise<Institution>;
  create: (createInstitutionDto: CreateInstitutionDto) => Promise<Institution>;
}
