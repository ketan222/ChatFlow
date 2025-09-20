import mongoose from "mongoose";

const chatFlow = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastSeen: { type: Date },
  accountVerified: { type: Boolean, default: false },
  isOnline: { type: Boolean, default: false },
});

const ChatFlowUser = mongoose.model("ChatFlowUser", chatFlow);

export default ChatFlowUser;
