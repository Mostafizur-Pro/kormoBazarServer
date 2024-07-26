import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
