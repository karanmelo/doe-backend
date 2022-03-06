import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  config();
}

export const serviceConfig = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/doe',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION || '1d',
};
