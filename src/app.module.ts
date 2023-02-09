import { MongooseModule } from '@nestjs/mongoose';
import { WalletsController } from './controllers/wallets.controller';
import { TransactionsController } from './controllers/transactions.controller';
import { WalletSchema } from './models/wallet.model';
import { TransactionSchema } from './models/transaction.model';
import { WalletsService } from './services/wallet.service';
import { TransactionsService } from './services/transaction.service';
import { Module } from '@nestjs/common';
import { DbModule } from './db.module';
@Module({
  imports: [
    DbModule,
    MongooseModule.forFeature([
      { name: 'Wallet', schema: WalletSchema },
      { name: 'Transaction', schema: TransactionSchema },
    ]),
  ],
  controllers: [WalletsController, TransactionsController],
  providers: [WalletsService, TransactionsService],
})
export class AppModule {}
