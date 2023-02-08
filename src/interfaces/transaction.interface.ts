/* eslint-disable prettier/prettier */

export interface Transaction {
    type: 'income' | 'expense';
    amount: number;
    date: Date;
    description: string;
  }
  