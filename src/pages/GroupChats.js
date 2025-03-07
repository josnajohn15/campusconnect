import { useState, useEffect } from "react";
import io from "socket.io-client";
import "./GroupChats.css";

const socket = io("http://localhost:5000");

const getRandomColor = () => {
  const colors = ["#1e88e5", "#43a047", "#f57c00", "#9c27b0", "#ff5252", "#26c6da", "#ffca28", "#8e24aa"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const GroupChats = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const username = localStorage.getItem("username") || "Anonymous"; // Get username from localStorage

  useEffect(() => {
    // ✅ Fetch previous messages when connecting
    socket.on("previousMessages", (prevMessages) => {
      setMessages(prevMessages);
    });

    // ✅ Listen for new messages in real-time
    socket.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("previousMessages");
      socket.off("receiveMessage");
    };
  }, []);

  // ✅ Send message to the server
  const sendMessage = () => {
    if (input.trim()) {
      const msgData = { sender: username, message: input };
      socket.emit("sendMessage", msgData);
      setInput(""); // Clear input field
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === username ? "my-message" : "other-message"}`}
            style={{ background: getRandomColor() }}
          >
            <p className="sender"><strong>{msg.sender}</strong></p>
            <p className="text">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
};

export default GroupChats;
