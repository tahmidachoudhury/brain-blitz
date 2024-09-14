import { Box, Button, TextField, Typography } from "@mui/material"
import React from "react"
import { io, Socket } from "socket.io-client"
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3001"
)

export default function ChooseGameSection() {
  function createGame() {
    socket.emit("createGame")
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box border="1px solid" xs={7} p={4} borderRadius="2.5%">
        <Typography variant="h3" gutterBottom sx={{ fontSize: "3rem" }}>
          Guest
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box xs={6} textAlign="center">
            <img
              src="https://picsum.photos/200"
              //src="White_Belt_from_a_Player_Card.png" club penguin
              style={{ borderRadius: "3rem", height: "200px", width: "200px" }}
            />
          </Box>

          <Box xs={6}>
            <Typography variant="h4" my={3} style={{ fontSize: "2rem" }}>
              Choose a nickname
            </Typography>
            <TextField
              id="outlined-basic"
              label="nickname"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-evenly" mt={3}>
          <Button onClick={createGame}>Create a game</Button>
          <Button href="join">Join a game</Button>
        </Box>
      </Box>
    </Box>
  )
}
