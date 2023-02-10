/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  walletId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['income', 'expense'],
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Transaction = mongoose.model('Transaction', transactionSchema);

export async function up() {
  await Transaction.createCollection();
}

export async function down() {
  await Transaction.collection.drop();
}
