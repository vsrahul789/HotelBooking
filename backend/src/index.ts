import express ,{Request, Response}from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to MongoDB");
})


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// ? req:Request , res:Response is defining the types of req and res comming from first line ie "express"
app.get("/", (req: Request, res:Response) => {
    res.send("Hello World!");
})

app.listen(3500, () => {
    console.log("Server is running on port 3500");
})