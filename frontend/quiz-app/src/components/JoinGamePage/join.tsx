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

export default function Join(props: { display: string; hideJoin: () => void }) {
  const [roomUniqueId, setRoomUniqueId] = useState("")
  const [nickname, setNickname] = useState("")

  function handleJoinGame() {
    socket.emit("joinGame", { roomUniqueId: roomUniqueId })
    socket.emit("setNickname", { nickname })
    props.hideJoin()
  }

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  return (
    <Box
      display={props.display}
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
            id="usertag"
            label="Nickname"
            variant="outlined"
            fullWidth
            value={nickname}
            onChange={handleTextFieldChange}
          />
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
