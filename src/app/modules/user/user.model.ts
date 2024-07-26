// user.model.ts
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Ensure password is not selected by default
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// hash the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = model<IUser, UserModel>("User", userSchema);
