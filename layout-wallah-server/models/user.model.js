import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
    },
  },
  email: {
    type: String,
    localcase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  verified: {
    status: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Number,
      select: false,
    },
    expiry: {
      type: Date,
    },
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Users = mongoose.model("users", userSchema);

export default Users;
