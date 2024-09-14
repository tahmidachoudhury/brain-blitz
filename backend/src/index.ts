const express = require("express")
const app = express()
const config = require("../utils/config") //abdinasir code
import { Server } from "socket.io"
const cors = require("cors")

interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  newGame: (roomUniqueId: string) => void
}

interface ClientToServerEvents {
  hello: () => void
  joinGame: (data: JoinGameData) => void
  createGame: () => void
}

interface InterServerEvents {
  ping: () => void
}
interface Rooms {
  [key: string]: Record<string, any>
}

const rooms: Rooms = {}

interface JoinGameData {
  roomUniqueId: string
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
    methods: "POST",
  },
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`)
  socket.on("disconnect", () => {
    console.log("user disconnected")
  })

  socket.on("createGame", () => {
    const roomUniqueId = makeid(6)
    rooms[roomUniqueId] = {}
    socket.join(roomUniqueId)
    console.log(`Player created room: ${roomUniqueId}`)
    socket.emit("newGame", roomUniqueId)
  })

  socket.on("joinGame", (data: JoinGameData) => {
    if (rooms[data.roomUniqueId] != null) {
      console.log(`Room ${data.roomUniqueId} exists`)
      socket.join(data.roomUniqueId)
      // socket.to(data.roomUniqueId).emit("playersConnected", {})
      // socket.emit("playersConnected")
    } else {
      console.log(`Room ${data.roomUniqueId} does not exist`)
    }
  })
})

server.listen(3001, () => {
  console.log("SERVER IS RUNNING")
})

function makeid(length: number) {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
