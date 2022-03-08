import { Prop, Schema } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { SchemaFactoryWithMethods } from 'src/infrastructure/adapters/database/models/utils';

export class ImageModel {
  @Prop()
  id: number;

  @Prop()
  path: string;
}

@Schema({
  collection: 'institutions',
})
export class InstitutionModel {
  @Prop()
  name: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  about: string;

  @Prop()
  instructions: string;

  @Prop()
  opening_hours: string;

  @Prop()
  open_on_weekends: boolean;

  @Prop({ default: () => new Date() })
  created_at: Date;

  @Prop()
  images?: ImageModel[];
}

export type InstitutionDocument = InstitutionModel & Document;

export const InstitutionSchema =
  SchemaFactoryWithMethods.createForClass(InstitutionModel);
