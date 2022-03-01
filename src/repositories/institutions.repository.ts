import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Institution } from 'src/entities';
import { InstitutionsData } from 'src/providers/institutions.provider';

@Injectable()
export class InstitutionsRepository implements InstitutionsData {
  constructor(
    @InjectModel(Institution.name)
    private institutionModel: Model<Institution>,
  ) {}

  async getAll(): Promise<Institution[]> {
    return this.institutionModel.find();
  }
}
