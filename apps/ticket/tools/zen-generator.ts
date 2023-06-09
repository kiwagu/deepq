import { exec } from 'child_process';
import * as fs from 'fs';
import { appendFile, mkdir, readFile, readdir, rm, writeFile } from 'fs/promises';
import * as path from 'path';
import { promisify } from 'util';

import { Generator as PalGenerator } from '@paljs/generator';
import { Config as PalConfig } from '@paljs/types';
import glob from 'glob-promise';

import {
  CaslPrismaSubjectsTemplate,
  ClientFieldsTemplate,
  ClientQueriesTemplate,
  DefaultFieldsTemplate,
  GraphQLIndexTemplate,
  GraphQLResolversTemplate,
  PaljsTypeDefsTemplate,
} from './templates';

const execAsync = promisify(exec);

export type ZenGeneratorConfig = {
  palConfig: PalConfig;
  apiOutPath: string;
  apiOutPathResolvers: string;
  caslSubjectsOutFile?: string;
  defaultFieldsOutFile?: string;
  frontend?: {
    outPath: string;
    /** @defaults 'fields' */
    fieldsFolderName?: string;
    /** @defaults 'prisma' */
    queriesFolderName?: string;
  };
};

export class ZenGenerator {
  constructor(public config: ZenGeneratorConfig) {}

  async run() {
    console.log(`------------------------ @paljs/generator ------------------------`);
    const palConfig = this.config.palConfig as any;
    const palOutPath = palConfig.backend.output
      ? palConfig.backend.output
      : path.join(this.config.apiOutPath, 'paljs');
    palConfig.backend.output = palOutPath;

    if (fs.existsSync(palOutPath)) {
      await rm(palOutPath, { recursive: true });
    }

    const pal = new PalGenerator(
      { name: palConfig.backend.generator, schemaPath: palConfig.schema },
      palConfig.backend
    );
    await pal.run();

    // Remove the `resolvers.ts` files
    const resolversGlob = path.join(palOutPath, '**/resolvers.ts').replaceAll('\\', '/');
    const resolversFiles = await glob(resolversGlob);
    for (const file of resolversFiles) {
      await rm(file);
    }

    console.log(`- Wrote: ${palOutPath}`);

    // Replace '@prisma/client' path with '../prisma'
    const resolverTypesPath = path.join(palOutPath, '../resolversTypes.ts');
    const resolverTypesOriginal = (await readFile(resolverTypesPath)).toString();
    const resolverTypesUpdated =
      resolverTypesOriginal.slice(0, 25) + '../prisma' + resolverTypesOriginal.slice(39);
    await writeFile(resolverTypesPath, resolverTypesUpdated);
    console.log(`- Wrote: ${resolverTypesPath}`);

    // Get Prisma type names via the directory names under the 'paljs' folder;
    const dirents = await readdir(palOutPath, { withFileTypes: true });
    let prismaNames = dirents.filter(d => d.isDirectory()).map(d => d.name);
    prismaNames = prismaNames.sort();

    const palTypeDefsFilePath = path.join(palOutPath, 'typeDefs.ts');
    await writeFile(palTypeDefsFilePath, PaljsTypeDefsTemplate(prismaNames));
    console.log(`- Wrote: ${palTypeDefsFilePath}`);

    console.log(`---------------- Nest GraphQL resolvers generated ----------------`);
    const nestResolversPath = path.join(this.config.apiOutPathResolvers, 'resolvers');

    if (!fs.existsSync(nestResolversPath)) {
      await mkdir(nestResolversPath, { recursive: true });
    }

    if (this.config.caslSubjectsOutFile) {
      const caslSubjectsOutPath = path.dirname(this.config.caslSubjectsOutFile);
      if (!fs.existsSync(caslSubjectsOutPath)) {
        await mkdir(caslSubjectsOutPath, { recursive: true });
      }
      await writeFile(this.config.caslSubjectsOutFile, CaslPrismaSubjectsTemplate(prismaNames));
      console.log(`- Wrote: ${this.config.caslSubjectsOutFile}`);
    }

    if (this.config.defaultFieldsOutFile) {
      const defaultFieldsOutPath = path.dirname(this.config.defaultFieldsOutFile);
      if (!fs.existsSync(defaultFieldsOutPath)) {
        await mkdir(defaultFieldsOutPath, { recursive: true });
      }
      await writeFile(this.config.defaultFieldsOutFile, DefaultFieldsTemplate(prismaNames));
      console.log(`- Wrote: ${this.config.defaultFieldsOutFile}`);
    }

    const wroteCount = await this.nestAbacResolvers(prismaNames);

    // Get the type names via the filename of the `resolvers` directory
    let indexTypeNames = (await readdir(nestResolversPath))
      .filter(
        f =>
          path.basename(f) !== 'index.ts' &&
          !path.basename(f).endsWith('.spec.ts') &&
          !path.basename(f).endsWith('.test.ts')
      )
      .map(f => path.basename(f, '.ts')); // Remove `.ts` extension

    const indexPath = path.join(nestResolversPath, 'index.ts');
    await writeFile(indexPath, GraphQLIndexTemplate(indexTypeNames));
    console.log(`- Wrote: ${indexPath}`);
    console.log(`* Total resolver files wrote: ${wroteCount}`);

    await this.execLocal(`prettier --loglevel warn --write "${this.config.apiOutPath}/**/*.ts"`);

    await this.generateFrontend(prismaNames);
  }

  async generateFrontend(prismaNames: string[]) {
    if (this.config.frontend) {
      if (!fs.existsSync(this.config.frontend.outPath)) {
        await mkdir(this.config.frontend.outPath, { recursive: true });
      }
      console.log(`----------------------- Frontend generated -----------------------`);
      const fieldsPath = this.config.frontend.fieldsFolderName
        ? path.join(this.config.frontend.outPath, this.config.frontend.fieldsFolderName)
        : path.join(this.config.frontend.outPath, 'fields');

      const queriesPath = this.config.frontend.queriesFolderName
        ? path.join(this.config.frontend.outPath, this.config.frontend.queriesFolderName)
        : path.join(this.config.frontend.outPath, 'prisma');

      if (!fs.existsSync(fieldsPath)) await mkdir(fieldsPath);
      if (!fs.existsSync(queriesPath)) await mkdir(queriesPath);

      const fieldsIndexPath = path.join(fieldsPath, `index.ts`);

      if (!fs.existsSync(fieldsIndexPath)) {
        await writeFile(fieldsIndexPath, '');
        console.log(`- Wrote: ${fieldsIndexPath}`);
      }

      let fieldsIndexSource = (await readFile(fieldsIndexPath)).toString();

      for (const prismaName of prismaNames) {
        const fieldsOutPath = path.join(fieldsPath, `${prismaName}.gql.ts`);
        const queriesOutPath = path.join(queriesPath, `${prismaName}.gql.ts`);

        if (!fs.existsSync(fieldsOutPath)) {
          await writeFile(fieldsOutPath, ClientFieldsTemplate(prismaName));
          console.log(`- Wrote: ${fieldsOutPath}`);
        }

        const exportScript = `export * from './${prismaName}.gql';`;
        if (!fieldsIndexSource.includes(exportScript)) {
          await appendFile(fieldsIndexPath, exportScript + '\n');
          fieldsIndexSource += exportScript + '\n';
        }

        const fieldsFolderName = this.config.frontend.fieldsFolderName
          ? this.config.frontend.fieldsFolderName
          : 'fields';
        await writeFile(queriesOutPath, ClientQueriesTemplate(prismaName, fieldsFolderName));
        console.log(`- Wrote: ${queriesOutPath}`);
      }
    }
  }

  async nestAbacResolvers(prismaNames: string[]) {
    let wroteCount = 0;
    for (const prismaName of prismaNames) {
      const outPath = path.join(this.config.apiOutPathResolvers, 'resolvers', `${prismaName}.ts`);

      if (!fs.existsSync(outPath)) {
        await writeFile(outPath, GraphQLResolversTemplate(prismaName));
        console.log(`- Wrote: ${outPath}`);
        wroteCount++;
      }
    }

    return wroteCount;
  }

  private execLocal(command: string) {
    console.log(command);
    return execAsync('npx ' + command).then(({ stdout, stderr }) => {
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
    });
  }
}
