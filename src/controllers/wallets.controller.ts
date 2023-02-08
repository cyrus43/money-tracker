/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { WalletsService } from 'src/services/wallet.service';
import { Wallet } from '../interfaces/wallet.interface';

@Controller('wallets')
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Post()
  async create(@Body() wallet: Wallet) {
    return this.walletsService.create(wallet);
  }
}
