//
//
//
//ignore this component for now
//
//
//

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

export default function GamePage() {
  const [initial, setInitial] = useState("none")
  const [lobbyData, setLobbyData] = useState("none")
  let roomUniqueId = null
  socket.on("newGame", (uniqueId) => {
    roomUniqueId = uniqueId
    console.log("New game created with ID:", roomUniqueId)
    setInitial("block")
  })

  return (
    <Box mt={10}>
      <Box id="waitingArea" sx={{ display: initial }}>
        <Typography>
          Waiting for opponent, please share code {roomUniqueId} to join
        </Typography>
      </Box>
      <Box id="gameArea" sx={{ display: initial }}></Box>
      <Box id="winnerArea">Hello</Box>
    </Box>
  )
}
