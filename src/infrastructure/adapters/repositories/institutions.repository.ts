import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Institution, InsitutionDocument } from 'src/core/domain/entities';
import { InstitutionsData } from 'src/core/providers/institutions.provider';
import { CreateInstitutionDto } from 'src/userInterface/dtos';

@Injectable()
export class InstitutionsRepository implements InstitutionsData {
  constructor(
    @InjectModel(Institution.name)
    private institutionModel: Model<Institution>,
  ) {}

  async get(): Promise<InsitutionDocument[]> {
    return this.institutionModel.find();
  }

  async getById(institutionId: string): Promise<InsitutionDocument> {
    return this.institutionModel.findById(institutionId);
  }

  async create(
    institutionDto: CreateInstitutionDto,
  ): Promise<InsitutionDocument> {
    return this.institutionModel.create(institutionDto);
  }
}
