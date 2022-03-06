import { InstitutionDocument } from 'src/core/domain/entities';
export class ImageDto {
  id: number;
  path: string;
}

export class InstitutionDto {
  constructor(institutionModel: InstitutionDocument) {
    if (institutionModel) {
      this.id = institutionModel._id;
      this.name = institutionModel.name;
      this.latitude = institutionModel.latitude;
      this.longitude = institutionModel.longitude;
      this.about = institutionModel.about;
      this.instructions = institutionModel.instructions;
      this.opening_hours = institutionModel.opening_hours;
      this.open_on_weekends = institutionModel.open_on_weekends;
      this.created_at = institutionModel.created_at;
      this.images = institutionModel.images;
    }
  }

  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  created_at: Date;
  images: ImageDto[];
}
