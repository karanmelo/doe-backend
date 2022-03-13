import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  config();
}

export const serviceConfig = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/doe',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION || '1d',
  storageType: process.env.STORAGE_TYPE || 'local',
  awsS3BucketName: process.env.AWS_S3_BUCKET_NAME,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsDefaultRegion: process.env.AWS_DEFAULT_REGION,
  maxSizeToMegabites: process.env.MAX_SIZE_TO_MEGABYTES || '4 * 1024 * 1024',
};
