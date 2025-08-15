import { validationResult } from "express-validator";
import Users from "../models/user.model.js";
import BlackListToken from "../models/blackList.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();

    if (!users) return res.status(400).json({ message: "Not found" });

    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.params.id });

    if (!user) return res.status(400).json({ message: "Not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty())
      return res.status(400).json({ message: error.array()[0] });

    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(401).json({ message: "All fields are required" });

    const isAlreadyUser = await Users.findOne({ email });

    if (isAlreadyUser) return res.status(200).json("User already exist");

    const hash = await Users.hashPassword(password);

    const user = new Users({
      name: { fname: name.fname, lname: name.lname },
      email,
      password: hash,
    });

    await user.save();

    const token = user.generateAuthToken();

    res.cookie("token", token);

    res.status(201).json({
      message: "User Register",
      token,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty())
      return res.status(401).josn({ message: error.array()[0] });

    const { email, password } = req.body;

    const user = await Users.findOne({ email }).select("+password");

    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = user.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({
      message: "login Successfully",
      token,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getUserProfile = (req, res) => {
  try {
    res.status(201).json(req.user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");
    const token = req.cookies?.token || req.headers.authorization;

    await BlackListToken.create({ token });
    res.status(200).json({ message: "Logout user" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
