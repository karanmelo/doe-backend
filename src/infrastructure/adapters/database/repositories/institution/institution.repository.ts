import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { InstitutionsDataPort } from 'src/core/ports';
import { Institution } from 'src/domain/entities';
import {
  InstitutionModel,
  InstitutionDocument,
} from 'src/infrastructure/adapters/database/models';
import { InstitutionFactory } from 'src/infrastructure/adapters/database/repositories/institution/institution.factory';

@Injectable()
export class InstitutionsRepository implements InstitutionsDataPort {
  constructor(
    @InjectModel(InstitutionModel.name)
    private institutionModel: Model<InstitutionModel>,
    private insitutionFactory: InstitutionFactory,
  ) {}

  async get(): Promise<Institution[]> {
    const result = await this.institutionModel.find().exec();
    return result.map((institution: InstitutionDocument) =>
      this.insitutionFactory.documentToModel(institution),
    );
  }

  async getById(institutionId: string): Promise<Institution> {
    const result = await this.institutionModel.findById(institutionId).exec();
    return this.insitutionFactory.documentToModel(result);
  }

  async create(institution: Institution): Promise<Institution> {
    const newInstitution = this.insitutionFactory.create(institution);
    const institutionModel = new this.institutionModel(newInstitution);
    const result = await institutionModel.save();
    return this.insitutionFactory.documentToModel(result);
  }
}
