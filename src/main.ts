import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import * as config from 'config';
import { config as dotenvConfig } from 'dotenv';

import { AppModule } from 'src/app.module';
import { IServerConfig } from 'src/core/commons/interfaces';
import { validateEnvs } from 'src/infrastructure/configs/dotenv.validator';
import { serviceConfig } from 'src/infrastructure/configs/service.config';
import swagger from 'src/infrastructure/configs/swagger.config';

if (!process.env.IS_TS_NODE) {
  import('module-alias/register');
}

async function bootstrap(): Promise<void> {
  dotenvConfig();

  const envs = validateEnvs();

  const serverConfig: IServerConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  swagger.init(app);

  if (envs.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
    logger.log(`Accepting requests from origin "${serverConfig.origin}"`);
  }

  const port = serviceConfig.port || serverConfig.port;
  await app.listen(port);
  logger.log(`Application is running on ${await app.getUrl()}`);
}

bootstrap();
