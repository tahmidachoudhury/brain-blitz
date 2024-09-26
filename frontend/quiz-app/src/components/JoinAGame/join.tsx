import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { io, Socket } from "socket.io-client"
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../../../../backend/src/index"
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3001"
)

export default function Join() {
  const [roomUniqueId, setRoomUniqueId] = useState("")

  function handleJoinGame() {
    socket.emit("joinGame", { roomUniqueId: roomUniqueId })
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box>
          <Typography>Brain Blitz!</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <TextField
            id="roomuniqueid"
            label="Game PIN"
            value={roomUniqueId}
            onChange={(e) => setRoomUniqueId(e.target.value)}
          ></TextField>
          <Button onClick={handleJoinGame}>Enter</Button>
        </Box>
      </Box>
    </Box>
  )
}
