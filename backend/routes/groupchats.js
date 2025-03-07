const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

const setupGroupChat = (io) => {
  io.on("connection", (socket) => {
    console.log("✅ User Connected:", socket.id);

    // ✅ Send all previous messages to the user who just connected
    Message.find()
      .then((messages) => {
        socket.emit("previousMessages", messages);
      })
      .catch((error) => console.error("❌ Error fetching messages:", error));

    // ✅ Listen for new messages
    socket.on("sendMessage", async (data) => {
      console.log("📩 Received message data:", data);

      if (!data.sender || !data.message) {
        console.error("❌ Missing required fields:", data);
        return;
      }

      try {
        // ✅ Save message to the database
        const newMessage = new Message({
          sender: data.sender,
          message: data.message,
          timestamp: new Date(),
        });

        await newMessage.save();

        // ✅ Broadcast message to all users
        io.emit("receiveMessage", newMessage);
      } catch (error) {
        console.error("❌ Error saving message:", error);
      }
    });

    // ✅ Handle user disconnection
    socket.on("disconnect", () => {
      console.log("❌ User Disconnected:", socket.id);
    });
  });
};

module.exports = { router, setupGroupChat };
