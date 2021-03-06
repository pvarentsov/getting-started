import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { initNestJsTracing, wrapNestJsModule } from '@recap.dev/client';
import { AppModule } from './app.module';

process.env.RECAP_DEV_SYNC_ENDPOINT = 'http://localhost:8080/traces';

initNestJsTracing();

(async () => {
  const docsPath = 'docs';
  const app = await NestFactory.create(wrapNestJsModule(AppModule));

  initSwagger(app, docsPath);

  await app.listen(3000);
  const appURL = await app.getUrl();

  Logger.log(`Application is running on: ${appURL}`, 'Main');
  Logger.log(`API documentation is available on: ${new URL(docsPath, appURL).toString()}`, 'Main');
})()

function initSwagger(app: INestApplication, path: string): void {
  const config = new DocumentBuilder()
    .setTitle('Getting started with Recap.Dev')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(path, app, document);
}

