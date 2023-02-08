import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './wallet.entity';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'money-tracker',
      entities: [Wallet],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Wallet]),
  ],
  providers: [WalletService],
  controllers: [WalletController],
})
export class AppModule {}
