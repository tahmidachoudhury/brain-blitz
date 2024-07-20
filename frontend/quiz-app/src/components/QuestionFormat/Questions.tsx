import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/system"
import qna from "../../data/qna.json"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

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
  const [color, setColor] = React.useState("primary")
  const [correct, setCorrect] = React.useState(false)

  const handleChange = (event, value) => {
    setCurrentQuestion(value - 1)
    setColor("primary")
    setCorrect(false)
  }
  const handleClick = (e) => {
    if (e.target.value === qna[currentQuestion].answer) {
      setCorrect(true)
      setColor("success")
    }
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
          <Typography>Term</Typography>
          <Typography>
            {currentQuestion + 1} of {qna.length}
          </Typography>
        </Box>
        <Box sx={{ pt: "1rem" }}>
          <Typography>{qna[currentQuestion].title}</Typography>
        </Box>
        <Box sx={{ pt: "3rem" }}>
          <Typography>Choose matching definition</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
              pt: 2,
            }}
          >
            {qna[currentQuestion].choices.map((choice, index) => (
              <Item
                item
                xs={6}
                key={index}
                value={choice}
                onClick={handleClick}
              >
                {choice}
              </Item>
            ))}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button>Don't know?</Button>
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
