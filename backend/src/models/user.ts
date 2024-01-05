import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// ? This is a middleware function that will be called before saving the user and their password to the database.
userSchema.pre("save", async function (next) {
  // ? we did not use arrow function because we are using "this" keyword and this keyword will give Object not defined
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model<UserType>("User", userSchema);
export default User;
