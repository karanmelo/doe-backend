import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function init(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('DOE API')
    .setDescription('API for comunicate with the DOE backend')
    .setVersion('1.0')
    .addTag('doeapi')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

export default {
  init,
};
