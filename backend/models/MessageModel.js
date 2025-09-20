import mongoose from "mongoose";
import ChatFlowUser from "./UserModel";
const Messages = new mongoose.Schema({
  messageTime: { type: Date, default: Date.now },
  messageSeenBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatFlowUser",
    },
  ],
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatFlowUser",
    required: true,
  },
  messageContent: {
    type: String,
    required: true,
  },
});

const ChatFlowMessages = mongoose.model("ChatFlowMessages", Messages);

export default ChatFlowMessages;
