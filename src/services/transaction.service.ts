/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from 'src/interfaces/transaction.interface';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel('Transaction') private transactionModel: Model<Transaction>) {}

  async create(transaction: Transaction) {
    const newTransaction = new this.transactionModel(transaction);
    return await newTransaction.save();
  }

  async findAll() {
    return await this.transactionModel.find().exec();
  }

  async findOne(id: string) {
    return await this.transactionModel.findById(id).exec();
  }

  async update(id: string, transaction: Transaction) {
    return await this.transactionModel.findByIdAndUpdate(id, transaction, { new: true });
  }

  async delete(id: string) {
    return await this.transactionModel.findByIdAndDelete(id);
  }
}
