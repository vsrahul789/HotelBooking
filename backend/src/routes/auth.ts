import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password should contain 6 or more charecters").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { userID: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1w" }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // ? 7 days
      });
      console.log("user logged in");
      res.status(200).json({ userID: user._id });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

export default router;
