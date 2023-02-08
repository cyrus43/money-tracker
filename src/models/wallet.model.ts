/* eslint-disable prettier/prettier */
import { Schema, model, Document } from 'mongoose';
import { Wallet } from 'src/interfaces/wallet.interface';

export const WalletSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  transactions: [
    {
      type: {
        type: String,
        enum: ['income', 'expense'],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

export const WalletModel = model<Wallet & Document>('Wallet', WalletSchema);
