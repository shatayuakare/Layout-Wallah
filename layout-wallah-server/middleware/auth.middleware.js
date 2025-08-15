import jwt from "jsonwebtoken";
import Users from "../models/user.model.js";
import BlackListToken from "../models/blackList.model.js";

const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ message: "Unauthorized Access by token" });

    const BlackListedToken = await BlackListToken.findOne({ token });

    if (BlackListedToken)
      return res
        .status(401)
        .json({ message: "Unauthorized access by black list" });

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findById(decode._id);
    req.user = user;
    return next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default authUser;
