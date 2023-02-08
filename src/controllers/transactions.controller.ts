/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Transaction } from 'src/interfaces/transaction.interface';
import { TransactionsService } from 'src/services/transaction.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() transaction: Transaction) {
    return await this.transactionsService.create(transaction);
  }

  @Get()
  async findAll() {
    return await this.transactionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.transactionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() transaction: Transaction) {
    return await this.transactionsService.update(id, transaction);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.transactionsService.delete(id);
  }
}
