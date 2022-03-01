import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Institution, InsitutionDocument } from 'src/entities';
import { InstitutionsData } from 'src/providers/institutions.provider';

@Injectable()
export class InstitutionsRepository implements InstitutionsData {
  constructor(
    @InjectModel(Institution.name)
    private institutionModel: Model<Institution>,
  ) {}

  async getAll(): Promise<InsitutionDocument[]> {
    return this.institutionModel.find();
  }

  async getById(institutionId: string): Promise<InsitutionDocument> {
    return this.institutionModel.findById(institutionId);
  }
}
