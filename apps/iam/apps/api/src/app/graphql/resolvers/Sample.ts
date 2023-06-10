import { createWriteStream, existsSync, mkdirSync } from 'fs';

import { Inject, Logger, OnModuleInit, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { RolesGuard } from '@deepq/nest-auth';
import gql from 'graphql-tag';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import type { Upload } from '../models';

export const typeDefs = gql`
  extend type Mutation {
    sampleUpload(file: Upload!): [String!]!
    sampleUploadMany(files: [Upload!]!): [String!]!
  }
`;

@Resolver()
@UseGuards(RolesGuard('Super'))
export class SampleResolver implements OnModuleInit {
  UPLOAD_PATH = './upload/';

  constructor(@Inject('IAM_SERVICE') private client: ClientProxy) {}

  onModuleInit() {
    if (!existsSync(this.UPLOAD_PATH)) {
      Logger.log('Creating directory', this.UPLOAD_PATH);
      mkdirSync(this.UPLOAD_PATH);
    }
  }

  @Mutation()
  async sampleUpload(@Args('file', { type: () => GraphQLUpload }) file: Upload) {
    return this.saveFiles([Promise.resolve(file)]);
  }

  @Mutation()
  async sampleUploadMany(@Args('files', { type: () => [GraphQLUpload] }) files: Promise<Upload>[]) {
    return this.saveFiles(files);
  }

  async saveFiles(files: Promise<Upload>[]) {
    return await Promise.all(
      files.map(async file => {
        const { filename, mimetype, encoding, createReadStream } = await file;
        Logger.log('Attachment:', filename, mimetype, encoding);
        const stream = createReadStream();

        return new Promise((resolve, reject) => {
          stream
            .on('close', () => {
              Logger.log(`${filename} ReadStream Closed`);
            })
            .on('error', err => {
              Logger.error(`${filename} ReadStream Error`, err);
            })
            .pipe(createWriteStream(`${this.UPLOAD_PATH}${filename}`))
            .on('close', () => {
              Logger.log(`${filename} WriteStream Closed`);
              resolve(`${filename} close`);
            })
            .on('error', err => {
              Logger.error(`${filename} WriteStream Error`, err);
              reject(`${filename} error`);
            });
        });
      })
    );
  }
}
