import { Box, Button, TextField, Typography } from "@mui/material"
import React, { ReactHTMLElement, useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../../../../backend/src/index"
import Join from "../JoinGamePage/join"
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3001"
)

export default function ChooseGameSection() {
  const [nickname, setNickname] = useState("")
  const [users, setUsers] = useState<{ id: string; nickname: string }[]>([])
  const [incomplete, setIncomplete] = useState(false)
  const [roomUniqueId, setRoomUniqueId] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  // const [isNewGameCreated, setIsNewGameCreated] = useState(false)
  // const [initial, setInitial] = useState(true)
  // const [gamePlay, setGamePlay] = useState(false)
  // const [lobby, setLobby] = useState(false)
  // const [display, setDisplay] = useState(false)
  socket.on("newGame", (uniqueId) => {
    setRoomUniqueId(uniqueId)
    console.log(`New game created with ID: ${uniqueId}`)
    // setInitial(false)
    // setGamePlay(true)
    // setLobby(true)
  })

  socket.on("hello", (data) => {
    setRoomUniqueId(data)
  })

  const createGame = () => {
    if (nickname.length >= 3) {
      socket.emit("createGame")
      socket.emit("setNickname", { nickname })
      setCurrentStep(1)
      // setIsNewGameCreated(true)
    } else {
      setIncomplete(true)
    }
  }

  const handleJoinGameButton = () => {
    //setDisplay(true)
    // setInitial(false)
    // setGamePlay(true)
  }

  const hideJoinComponent = () => {}

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  useEffect(() => {
    socket.on("updateUsers", (users) => {
      setUsers(users)
    })
    return () => {
      socket.off("updateUsers")
    }
  }, [])

  return (
    <Box display="flex" justifyContent="center">
      {currentStep === 0 && (
        <Box
          sx={{
            border: "1px solid",
            p: 4,
            xs: 7,
            borderRadius: "2.5%",
          }}
        >
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
            <Box sx={{ xs: 6, textAlign: "center" }}>
              <img
                src="https://picsum.photos/200"
                //src="White_Belt_from_a_Player_Card.png" club penguin
                style={{
                  borderRadius: "3rem",
                  height: "200px",
                  width: "200px",
                }}
              />
            </Box>

            <Box sx={{ xs: 6 }}>
              <Typography variant="h4" my={3} style={{ fontSize: "2rem" }}>
                Choose a nickname
              </Typography>
              <TextField
                error={incomplete}
                id="usertag"
                label="Nickname"
                variant="outlined"
                fullWidth
                value={nickname}
                onChange={handleTextFieldChange}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-evenly" mt={3}>
            <Button onClick={() => setCurrentStep(1)}>Create a game</Button>
            <Button onClick={() => setCurrentStep(2)}>Join a game</Button>
          </Box>
        </Box>
      )}
      {currentStep === 1 && (
        <Box id="gameplay">
          {/* <Join joinAction={() => setCurrentStep(2)} /> */}
          <Box id="waitingArea">
            <Typography>
              Waiting for opponent, please share code {roomUniqueId} to join
            </Typography>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user.nickname}</li>
              ))}
            </ul>
          </Box>
          <Box id="gameArea"></Box>
          <Box id="winnerArea"></Box>
        </Box>
      )}
      {currentStep === 2 && <Join joinAction={() => setCurrentStep(1)} />}
    </Box>
  )
}
