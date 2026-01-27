import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Aumentar limite do body parser para JSON e urlencoded
  app.use(bodyParser.json({ limit: '100mb' })); // aceita JSON até 10MB
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

  // Validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3333);
}
bootstrap();
