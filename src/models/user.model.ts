/* eslint-disable prettier/prettier */
import { Document, model, Schema } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<User>('User', userSchema);
