// user.interface.ts
import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
