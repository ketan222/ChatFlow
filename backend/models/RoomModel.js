import mongoose from "mongoose";
import ChatFlowUser from "./UserModel";
import ChatFlowMessages from "./MessageModel";
const Room = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatFlowUser",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatFlowMessages",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChatFlowRooms = mongoose.model("ChatFlowRooms", Room);

export default ChatFlowRooms;
