import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import contactRoute from "./routes/contact.route.js";
import propertyRoute from "./routes/property.route.js";

const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5173", // or your frontend URL
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (optional)
  })
);
server.use(express.urlencoded({ extended: true }));
dotenv.config();

const port = process.env.PORT || 4000;
const mongoDb =
  process.env.MONGODB || "mongodb://localhost:27017/layout-wallah";

server.listen(port, () => {
  console.log(`Server running on port ${port}`);

  mongoose
    .connect(mongoDb)
    .then(() => {
      console.log(`Database Connected Successfully`);
    })
    .catch((error) => {
      console.error("MongoDB Connection Error:", error.message);
      console.log(
        "Please ensure MongoDB is running or check your connection string"
      );
    });
});

server.get("/", (req, res) => {
  res.send("hello world");
});

server.use("/auth", userRoute);
server.use("/contacts", contactRoute);
server.use("/properties", propertyRoute);
