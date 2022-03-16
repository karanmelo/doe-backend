import { ApiProperty } from '@nestjs/swagger';

import { Type, Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInstitutionImageDto {
  @ApiProperty()
  @IsNumber()
  id: string;

  @ApiProperty()
  @IsString()
  originalName: string;

  @ApiProperty()
  @IsString()
  fileName: string;

  @ApiProperty()
  @IsString()
  mimeType: string;

  @ApiProperty()
  @IsString()
  path: string;
}

export class CreateInstitutionDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform((value) => Number(value))
  latitude: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform((value) => Number(value))
  longitude: number;

  @ApiProperty()
  @IsString()
  about: string;

  @ApiProperty()
  @IsString()
  instructions: string;

  @ApiProperty()
  @IsString()
  openingHours: string;

  @ApiProperty()
  @IsBoolean()
  @Transform((value) => Boolean(value))
  openOnWeekends: boolean;

  @ApiProperty()
  @Type(() => CreateInstitutionImageDto)
  images?: CreateInstitutionImageDto[];
}
