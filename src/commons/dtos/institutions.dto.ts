import { Institution } from 'src/entities';

export class ImageDto {
  id: number;
  path: string;
}

export class InstitutionDto {
  constructor(institutionModel: Institution) {
    this.name = institutionModel.name;
    this.latitude = institutionModel.latitude;
    this.longitude = institutionModel.longitude;
    this.about = institutionModel.about;
    this.instructions = institutionModel.instructions;
    this.opening_hours = institutionModel.opening_hours;
    this.open_on_weekends = institutionModel.open_on_weekends;
    this.images = institutionModel.images;
  }

  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: ImageDto[];
}
