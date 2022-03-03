import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import * as config from 'config';

import { AppModule } from 'src/app.module';
import { ServerConfig } from 'src/common/interfaces';
import { validateEnvs } from 'src/configs/dotenv.validator';
import { serviceConfig } from 'src/configs/service.config';
import swagger from 'src/configs/swagger.config';

if (!process.env.IS_TS_NODE) {
  import('module-alias/register');
}

async function bootstrap(): Promise<void> {
  const envs = validateEnvs();

  const serverConfig: ServerConfig = config.get('server');
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
  logger.log(`Application listening on port ${port}`);
}

bootstrap();
