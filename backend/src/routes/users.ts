import express, { Request, Response } from "express";
import User from "../models/user";
import JWT from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "First Name required").isString(),
    check("lastName", "Last Name required").isString(),
    check("email", "email required").isEmail(),
    check("password", "password should contain 6 or more charecters").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    //? post method is used since we are creating a user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email }); // ? checking weather user already exists or not
      if (user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      user = new User(req.body);
      await user.save();
      const token = JWT.sign(
        { userID: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1w" }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // ? 7 days
      });
      console.log("Data is Stored in the DB");

      // ! res.sendStatus(200);
      // ! here we are not sending res.sendStatus(200) because the browser is trying to convert the return statement to .json format and falling apart
      // * so we are using res.status(200) and res.send({ message: "User Registered OK" }) instead of res.sendStatus(200) and res.send({ message: "User Registered OK" })
      return res.status(200).send({ message: "User Registered OK" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      // ? here we are not explicitly consoling the error because they are coming from mongo DB and might contain sensitive info
    }
  }
);

export default router;
