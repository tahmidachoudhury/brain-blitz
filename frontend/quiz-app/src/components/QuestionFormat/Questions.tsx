import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/system"
import qna from "../../data/chemistry"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { io, Socket } from "socket.io-client"
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3001"
)

const Item = styled(Button)({
  height: 60,
  borderRadius: "8px",
  lineHeight: "60px",
  paddingLeft: "10px",
  backgroundColor: "#5f6487",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#6a6f96",
  },
})

export default function MCQQuestion() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [selectedAnswer, setSelectedAnswer] = React.useState("")
  const [score, setScore] = React.useState(0)
  const [answers, setAnswers] = React.useState(Array(qna.length).fill(null))
  const [answeredQuestions, setAnsweredQuestions] = React.useState(
    Array(qna.length).fill(false)
  )

  const handleChange = (event, value) => {
    setCurrentQuestion(value - 1)
    setSelectedAnswer(answers[value - 1] || "")
  }

  const handleClick = (choice) => {
    if (!answeredQuestions[currentQuestion]) {
      setSelectedAnswer(choice)

      const newAnswers = [...answers]
      newAnswers[currentQuestion] = choice
      setAnswers(newAnswers)

      const newAnsweredQuestions = [...answeredQuestions]
      newAnsweredQuestions[currentQuestion] = true
      setAnsweredQuestions(newAnsweredQuestions)

      if (choice === qna[currentQuestion].answer) {
        setScore((prevScore) => prevScore + 1)
      }
    }
  }

  React.useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] || "")
  }, [currentQuestion, answers])

  const getButtonSx = (choice) => {
    if (!answeredQuestions[currentQuestion]) return
    if (choice === qna[currentQuestion].answer) {
      return {
        backgroundColor: "green",
        color: "white",
        "&:disabled": { backgroundColor: "green", color: "white" },
      }
    }
    if (choice === selectedAnswer) {
      return {
        backgroundColor: "red",
        color: "white",
        "&:disabled": { backgroundColor: "red", color: "white" },
      }
    }
    return
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper
        elevation={3}
        square={false}
        sx={{
          px: 4,
          py: 2,
          minWidth: { xs: 0.8, sm: 0.6, md: 0.7, lg: 0.8 },
          my: 4,
          background: "rgb(233, 234, 251)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Question {currentQuestion + 1}</Typography>
          <Typography>Score: {score}</Typography>
        </Box>
        <Box sx={{ pt: "1rem" }}>
          <Typography>{qna[currentQuestion].title}</Typography>
        </Box>
        <Box sx={{ pt: "3rem" }}>
          <Typography>Choose the correct answer:</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
              pt: 2,
            }}
          >
            {qna[currentQuestion].choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleClick(choice)}
                disabled={answeredQuestions[currentQuestion]}
                sx={getButtonSx(choice)}
              >
                {choice}
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>
      <Stack spacing={2}>
        <Pagination
          count={qna.length}
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </Box>
  )
}
