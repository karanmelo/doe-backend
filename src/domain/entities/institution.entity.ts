export class Image {
  id: string;

  originalName: string;

  filenName: string;

  mimeType: string;

  path: string;
}

export class Institution {
  id: string;

  name: string;

  latitude: number;

  longitude: number;

  about: string;

  instructions: string;

  openingHours: string;

  openOnWeekends: boolean;

  createdAt: Date;

  images?: Image[];
}
