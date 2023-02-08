/* eslint-disable prettier/prettier */
import { Schema, model, Document } from 'mongoose';
import { Transaction } from 'src/interfaces/transaction.interface';

export const TransactionSchema = new Schema({
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
});

export const TransactionModel = model<Transaction & Document>('Transaction', TransactionSchema);
