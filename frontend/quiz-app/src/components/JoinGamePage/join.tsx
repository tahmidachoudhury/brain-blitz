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

type JoinProps = {
  joinAction: () => void
}

export default function Join(props: JoinProps) {
  const [roomUniqueId, setRoomUniqueId] = useState("")
  const [nickname, setNickname] = useState("")
  const [incomplete, setIncomplete] = useState(false)
  const { joinAction } = props

  function handleJoinGame() {
    socket.emit("joinGame", { roomUniqueId: roomUniqueId })
    socket.emit("setNickname", { nickname })
    socket.on("hello", () => {
      setIncomplete(true)
    })
    // if (incomplete) {
    //   hideJoin
    // }
  }

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  return (
    <Box justifyContent="center" alignItems="center" height="100vh">
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
            error={incomplete}
            value={roomUniqueId}
            onChange={(e) => setRoomUniqueId(e.target.value)}
          ></TextField>
          <Button onClick={joinAction}>Enter</Button>
        </Box>
      </Box>
    </Box>
  )
}
