/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['debit', 'credit']
  }
});
export const Transaction = mongoose.model('Transaction', transactionSchema);

export async function up() {
  await Transaction.createCollection();
}

export async function down() {
  await Transaction.collection.drop();
}
