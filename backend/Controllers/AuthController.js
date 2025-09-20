import ChatFlowUser from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const cookie = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = async function (req, res) {
  try {
    // get the email and password from req.body
    const { name, email, password } = req.body;

    // perform validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "Email and Password are required" });
    }

    // make the user
    // console.log("HI");
    const user = await ChatFlowUser.create({
      name: name,
      email: email,
      password: password,
    });

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
    };
    const token = cookie(user._id);
    await user.save();

    res.cookie("ChatFlow-User", token, cookieOptions);
    res.status(201).json({ status: "success", token, user });

    // res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};
