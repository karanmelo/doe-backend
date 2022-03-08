export class Image {
  id: number;
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
