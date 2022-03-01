import { InsitutionDocument } from 'src/entities';
export class ImageDto {
  id: number;
  path: string;
}

export class InstitutionDto {
  constructor(institutionModel: InsitutionDocument) {
    this.id = institutionModel._id;
    this.name = institutionModel.name;
    this.latitude = institutionModel.latitude;
    this.longitude = institutionModel.longitude;
    this.about = institutionModel.about;
    this.instructions = institutionModel.instructions;
    this.opening_hours = institutionModel.opening_hours;
    this.open_on_weekends = institutionModel.open_on_weekends;
    this.images = institutionModel.images;
  }

  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: ImageDto[];
}