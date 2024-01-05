import express, { Request, Response } from "express";
import User from "../models/user";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({ email: req.body.email }); // ? checking weather user already exists or not
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    user = new User(req.body);
    await user.save();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    // ? here we are not explicitly consoling the error because they are coming from mongo DB and migh contain sensitive info
  }
});
