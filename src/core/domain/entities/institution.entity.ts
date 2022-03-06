import { Prop, Schema } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { SchemaFactoryWithMethods } from 'src/core/domain/entities/utils';

export class Image {
  @Prop()
  id: number;

  @Prop()
  path: string;
}

@Schema({
  collection: 'institutions',
})
export class Institution {
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
  images?: Image[];
}

export type InstitutionDocument = Institution & Document;

export const InstitutionSchema =
  SchemaFactoryWithMethods.createForClass(Institution);
