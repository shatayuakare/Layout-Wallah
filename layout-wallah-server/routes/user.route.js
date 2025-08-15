import express from "express";
import { body } from "express-validator";
import {
  loginUser,
  registerUser,
  getUsers,
  getUserProfile,
  getUser,
  logoutUser,
} from "../controller/user.controller.js";
import authUser from "../middleware/auth.middleware.js";

const userRoute = express.Router();

userRoute.post(
  "/register",
  [
    body("name.fname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 character"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be atleast 8 character long"),
  ],
  registerUser
);

userRoute.post(
  "/login",
  [body("email").isEmail().withMessage("Invalid Email")],
  loginUser
);

userRoute.get("/profile", authUser, getUserProfile);
userRoute.get("/logout", authUser, logoutUser);
userRoute.get("/", getUsers);
userRoute.get("/:id", getUser);

export default userRoute;
