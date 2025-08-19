import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session'); // import like this due to config mismatch with nest

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['asdiasj']
  }))
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
