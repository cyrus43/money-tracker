/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
  ],
})
export class DbModule {}
