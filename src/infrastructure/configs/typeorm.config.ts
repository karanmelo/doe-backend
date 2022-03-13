import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as Dotenv from 'dotenv';

const dotenv = Dotenv.config().parsed;

const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: dotenv.TYPEORM_HOST || 'localhost',
  port: Number(dotenv.TYPEORM_PORT) || 27017,
  username: dotenv.TYPEORM_USERNAME,
  password: dotenv.TYPEORM_PASSWORD,
  database: dotenv.TYPEORM_DATABASE || 'doe',
  entities: [dotenv.TYPEORM_ENTITIES] || [
    `${rootDir}/entities/models/*.{ts,js}`,
  ],
  synchronize: dotenv.TYPEORM_SYNC === 'true',
  logging: false,
  migrations: [`${rootDir}/database/migrations/*.{ts,js}`],
  cli: {
    migrationsDir: `${rootDir}/database/migrations`,
  },
};
