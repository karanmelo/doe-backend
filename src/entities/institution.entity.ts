import { Prop, Schema } from '@nestjs/mongoose';

import { SchemaFactoryWithMethods } from 'src/commons/utils/';

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

  @Prop()
  images: Image[];
}

export const InstitutionSchema =
  SchemaFactoryWithMethods.createForClass(Institution);
