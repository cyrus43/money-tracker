/* eslint-disable prettier/prettier */
// wallet.migration.ts

import * as mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Wallet = mongoose.model('Wallet', walletSchema);

export async function up() {
  await Wallet.createCollection();
}

export async function down() {
  await Wallet.collection.drop();
}
