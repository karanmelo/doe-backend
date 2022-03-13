import * as Dotenv from 'dotenv';
import * as Yup from 'yup';
import { ValidationError } from 'yup';

const dotEnvSchema = Yup.object().shape({
  IS_TS_NODE: Yup.string().oneOf(['true', 'false']),
  NODE_ENV: Yup.string().oneOf(['development', 'production']).required(),
  PORT: Yup.number(),
  STORAGE_TYPE: Yup.string().default('local'),
  AWS_S3_BUCKET_NAME: Yup.string(),
  AWS_ACCESS_KEY_ID: Yup.string(),
  AWS_SECRET_ACCESS_KEY: Yup.string(),
  AWS_DEFAULT_REGION: Yup.string(),
  MAX_SIZE_TWO_MEGABYTES: Yup.string(),
  // TYPEORM_AUTO_SCHEMA_SYNC: Yup.string().oneOf(['true', 'false']).required(),
  // TYPEORM_CONNECTION: Yup.string().oneOf(['postgres']).required(),
  // TYPEORM_ENTITIES: Yup.string().default('src/entities/*.entity.ts').required(),
  // TYPEORM_MIGRATIONS: Yup.string().default('src/migrations/*.ts').required(),
  // TYPEORM_MIGRATIONS_DIR: Yup.string().default('src/migrations').required(),
  // TYPEORM_ENTITIES_DIR: Yup.string().default('src/entities').required(),
  // TYPEORM_HOST: Yup.string().required(),
  // TYPEORM_PORT: Yup.string().required(),
  // TYPEORM_USERNAME: Yup.string().required(),
  // TYPEORM_PASSWORD: Yup.string().required(),
  // TYPEORM_DATABASE: Yup.string().required(),
  // TYPEORM_SYNC: Yup.string(),
});

/**
 * Checks if all needed environment variables exist
 */
export const validateEnvs = (): Dotenv.DotenvParseOutput => {
  if (process.env.NODE_ENV !== 'production') {
    Dotenv.config();
  }

  dotEnvSchema.validate(process.env).catch((error: ValidationError) => {
    throw error;
  });

  return process.env;
};
