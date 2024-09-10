const express = require("express")
const app = express()
const config = require("../utils/config") //abdinasir code
import { Server } from "socket.io"
const cors = require("cors")

interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
}

interface ClientToServerEvents {
  hello: () => void
}

interface InterServerEvents {
  ping: () => void
}

//cors middleware
app.use(cors())

const http = require("http")

const server = http.createServer(app)

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents
>(server, {
  cors: {
    origin: "http://localhost:5173",
  },
})
//cors for React Frontend

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`)
})

server.listen(3001, () => {
  console.log("SERVER IS RUNNING")
})
