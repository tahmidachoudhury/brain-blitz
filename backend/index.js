const express = require("express")
const app = express()
const config = require("./utils/config") //abdinasir code
const { Server } = require("socket.io")
const cors = require("cors")

//cors middleware
app.use(cors())

const http = require("http")

const server = http.createServer(app)

//cors for React Frontend
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
})

server.listen(3001, () => {
  console.log("SERVER IS RUNNING")
})
