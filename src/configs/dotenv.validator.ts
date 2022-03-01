import * as Dotenv from 'dotenv';
import * as Yup from 'yup';
import { ValidationError } from 'yup';

const dotEnvSchema = Yup.object().shape({
  IS_TS_NODE: Yup.string().oneOf(['true', 'false']),
  NODE_ENV: Yup.string().oneOf(['development', 'production']).required(),
  PORT: Yup.number(),
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
  const dotenvConfigOutput = Dotenv.config();
  if (
    dotenvConfigOutput.error !== undefined ||
    dotenvConfigOutput.parsed === undefined
  ) {
    throw dotenvConfigOutput.error;
  }
  const { parsed: envs } = dotenvConfigOutput;

  dotEnvSchema.validate(envs).catch((error: ValidationError) => {
    throw error;
  });

  return envs;
};
