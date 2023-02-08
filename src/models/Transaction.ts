/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Wallet } from './Wallet';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(type => Wallet, wallet => wallet.transactions)
  wallet: Wallet;
}
