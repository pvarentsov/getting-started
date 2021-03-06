import { NestFactory } from '@nestjs/core';
import { initNestJsTracing, wrapNestJsModule } from '@recap.dev/client';
import { AppModule } from './app.module';

process.env.RECAP_DEV_SYNC_ENDPOINT = 'http://localhost:8080/traces';

initNestJsTracing();

async function bootstrap() {
  const app = await NestFactory.create(wrapNestJsModule(AppModule));
  await app.listen(3000);
}
bootstrap();
