// routes/chatbotRoutes.js
const express = require("express");
const router = express.Router();
const { queryHuggingFace } = require("../h"); // Import chatbot logic

// ✅ Chatbot Route
router.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        console.log("Received message:", message);

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        // ✅ Get response from chatbot logic
        const reply = await queryHuggingFace(message);
        res.json({ reply });
    } catch (error) {
        console.error("Chatbot error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;