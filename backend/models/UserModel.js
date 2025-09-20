import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  createdAt: { type: Date, default: Date.now },
  lastSeen: { type: Date },
  accountVerified: { type: Boolean, default: false },
  isOnline: { type: Boolean, default: false },
});

User.pre("save", async function (next) {
  try {
    const pwd = await bcrypt.hash(this.password, 10);
    this.password = pwd;

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

const ChatFlowUser = mongoose.model("ChatFlowUser", User);

export default ChatFlowUser;
