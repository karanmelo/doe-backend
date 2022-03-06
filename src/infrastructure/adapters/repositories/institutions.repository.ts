import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Institution, InstitutionDocument } from 'src/core/domain/entities';
import { InstitutionsPort } from 'src/core/ports';
import { CreateInstitutionDto } from 'src/userInterface/dtos';

@Injectable()
export class InstitutionsRepository implements InstitutionsPort {
  constructor(
    @InjectModel(Institution.name)
    private institutionModel: Model<Institution>,
  ) {}

  async get(): Promise<InstitutionDocument[]> {
    return this.institutionModel.find().exec();
  }

  async getById(institutionId: string): Promise<InstitutionDocument> {
    return this.institutionModel.findById(institutionId).exec();
  }

  async create(
    institutionDto: CreateInstitutionDto,
  ): Promise<InstitutionDocument> {
    const institutionModel = new this.institutionModel(institutionDto);
    return institutionModel.save();
  }
}
