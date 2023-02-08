import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice({
    strategy: new TypeOrmModule({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'money-tracker',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  });
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
