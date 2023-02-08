/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from 'src/interfaces/wallet.interface';

@Injectable()
export class WalletsService {
  constructor(@InjectModel('Wallet') private walletModel: Model<Wallet>) {}

  async create(wallet: Wallet) {
    const newWallet = new this.walletModel(wallet);
    return await newWallet.save();
  }

  async findAll() {
    return await this.walletModel.find().exec();
  }

  async findOne(id: string) {
    return await this.walletModel.findById(id).exec();
  }

  async update(id: string, wallet: Wallet) {
    return await this.walletModel.findByIdAndUpdate(id, wallet, { new: true });
  }

  async delete(id: string) {
    return await this.walletModel.findByIdAndDelete(id);
  }
}