import { Injectable } from '@nestjs/common';

import { Institution } from 'src/domain/entities';
import { InstitutionDocument } from 'src/infrastructure/adapters/database/models';

@Injectable()
export class InstitutionFactory {
  documentToModel(institutionDocument: InstitutionDocument): Institution {
    const institution = new Institution();
    institution.id = institutionDocument._id;
    institution.name = institutionDocument.name;
    institution.about = institutionDocument.about;
    institution.latitude = institutionDocument.latitude;
    institution.longitude = institutionDocument.longitude;
    institution.openOnWeekends = institutionDocument.open_on_weekends;
    institution.openingHours = institutionDocument.opening_hours;
    institution.images = institutionDocument.images;

    return institution;
  }

  create(createInstitutionDto: Institution): Institution {
    const institution = new Institution();
    institution.name = createInstitutionDto.name;
    institution.phone = createInstitutionDto.phone;
    institution.about = createInstitutionDto.about;
    institution.latitude = createInstitutionDto.latitude;
    institution.longitude = createInstitutionDto.longitude;
    institution.openOnWeekends = createInstitutionDto.openOnWeekends;
    institution.openingHours = createInstitutionDto.openingHours;
    institution.images = createInstitutionDto.images;

    return institution;
  }
}
