import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateInstitutionImageDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  path: string;
}

export class CreateInstitutionDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  latitude: number;

  @ApiProperty()
  @IsNumber()
  longitude: number;

  @ApiProperty()
  @IsString()
  about: string;

  @ApiProperty()
  @IsString()
  instructions: string;

  @ApiProperty()
  @IsString()
  opening_hours: string;

  @ApiProperty()
  @IsBoolean()
  open_on_weekends: boolean;

  @ApiProperty()
  @Type(() => CreateInstitutionImageDto)
  images?: CreateInstitutionImageDto[];
}
