import { Image, Institution } from 'src/domain/entities';

export class ImageDto {
  constructor(image?: Image) {
    if (image) {
      Object.assign(this, image);
    }
  }

  id: string;

  originalName: string;

  filenName: string;

  mimeType: string;

  path: string;
}

export class InstitutionDto {
  constructor(institutionModel: Institution) {
    if (institutionModel) {
      this.id = institutionModel.id;
      this.name = institutionModel.name;
      this.latitude = institutionModel.latitude;
      this.longitude = institutionModel.longitude;
      this.about = institutionModel.about;
      this.instructions = institutionModel.instructions;
      this.openingHours = institutionModel.openingHours;
      this.openOnWeekends = institutionModel.openOnWeekends;
      this.createdAt = institutionModel.createdAt;
      this.images = institutionModel.images;
    }
  }

  id: string;

  name: string;

  latitude: number;

  longitude: number;

  about: string;

  instructions: string;

  openingHours: string;

  openOnWeekends: boolean;

  createdAt: Date;

  images: ImageDto[];
}
