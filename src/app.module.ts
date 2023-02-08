// src/app/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletsController } from './controllers/wallets.controller';
import { TransactionsController } from './controllers/transactions.controller';
import { WalletSchema } from './models/wallet.model';
import { TransactionSchema } from './models/transaction.model';
import { WalletsService } from './services/wallet.service';
import { TransactionsService } from './services/transaction.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Wallet', schema: WalletSchema },
      { name: 'Transaction', schema: TransactionSchema },
    ]),
  ],
  controllers: [WalletsController, TransactionsController],
  providers: [WalletsService, TransactionsService],
})
export class AppModule {}
