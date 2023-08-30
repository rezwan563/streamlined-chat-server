const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const httpServer = http.createServer()

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173"
    }
  });



// app.get("/", (req, res) => {
//   res.json("Socket.io server is on");
// });

// io.on("connection", (socket) => {
//   console.log(socket.connected);
// });

// io.on("connection", (socket) =>{
//     socket.on("chat message", (msg) =>{
//         console.log("message:", msg);
//     })
// })

// io.on("connection", (socket) =>{
//     socket.on("chat message", (msg)=>{
//         io.emit("chat message", msg)
//     })
// })
// server.listen(3000, () => {
//   console.log("listening on port:3000");
// });
