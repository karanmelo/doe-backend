import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CreateInstitutionDto, ImageDto, InstitutionDto } from 'src/core/dtos';
import { InstitutionsDataPort } from 'src/core/ports';
import { Image } from 'src/domain/entities';
import { serviceConfig } from 'src/infrastructure/configs/service.config';

@Injectable()
export class CreateInstitutionService {
  constructor(private institutionsProvider: InstitutionsDataPort) {}

  async execute(
    institutionDto: CreateInstitutionDto,
    files: Array<Express.Multer.File>,
  ): Promise<InstitutionDto> {
    try {
      const images = files.map((file: Express.Multer.File) => {
        const image = new Image();
        image.id = file.filename.split('.')[0];
        image.originalName = file.originalname;
        image.fileName = file.filename;
        image.mimeType = file.mimetype;
        image.path =
          serviceConfig.nodeEnv === 'development'
            ? `http://localhost:${serviceConfig.port}/uploads/${file.filename}`
            : file.path;

        return new ImageDto(image);
      });

      const createInstitution: CreateInstitutionDto = {
        ...institutionDto,
        images,
      };

      const institution = await this.institutionsProvider.create(
        createInstitution,
      );

      return new InstitutionDto(institution);
    } catch (error) {
      const errorMessage = `Error trying to save institution data. ${error.message}.`;

      throw new InternalServerErrorException(errorMessage);
    }
  }
}
