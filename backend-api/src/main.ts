import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(port);

  console.log('Server is running on port : ', port);
}
bootstrap();
