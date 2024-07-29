// Import necessary modules
import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./router/auth.js";
import messagesRouter from "./router/message.js";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const server = http.createServer(app); // Create HTTP server

// Initialize socket.io and attach it to the HTTP server
const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB Connection Successful");
})
.catch((err) => {
  console.error("DB Connection Error:", err.message);
});

// Example route
app.get("/ping", (req, res) => {
  return res.send("Ping Successful");
});

// Route for authentication
app.use("/v1/api/auth/", authRouter);
app.use("/v1/api/messages", messagesRouter);
// Socket.io event handling
global.onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    onlineUsers.forEach((value, key) => {
      if (value === socket.id) {
        onlineUsers.delete(key);
      }
    });
  });

  socket.on("send-message", (data) => {
    const sendUserSocket = onlineUsers.get(data.id);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("send-message", data.msg);
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
