import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';

import * as aws from 'aws-sdk';
import * as crypto from 'crypto';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as path from 'path';

import { serviceConfig } from 'src/infrastructure/configs/service.config';

const MAX_SIZE_TO_MEGABYTES = Number(serviceConfig.maxSizeToMegabites);

const STORAGE_TYPE = serviceConfig.storageType;
const AWS_S3_BUCKET_NAME = serviceConfig.awsS3BucketName;

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, '');

        const key = `${hash.toString('hex')}.png`;

        cb(null, key);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: AWS_S3_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}.png`;

        cb(null, fileName);
      });
    },
  }),
};

@Injectable()
export class MulterService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: path.resolve(__dirname, '..', '..', '..', '..', 'uploads'),
      storage: storageTypes[STORAGE_TYPE],
      limits: {
        fileSize: MAX_SIZE_TO_MEGABYTES,
      },
      fileFilter: (req: any, file: any, cb: any) => {
        const allowedMimes = [
          'image/jpg',
          'image/jpeg',
          'image/pjpeg',
          'image/png',
        ];

        if (allowedMimes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error('Invalid file type.'));
        }
      },
    };
  }
}
