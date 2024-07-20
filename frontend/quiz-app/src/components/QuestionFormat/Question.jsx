import qna from "../../data/qna.json"

const Question = ({ correct, currentQuestion }) => {
  const [color, setColor] = React.useState("primary")
  const [correct, setCorrect] = React.useState(false)

  return (
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
            <Button
              item
              xs={6}
              key={index}
              value={choice}
              onClick={handleClick}
            >
              {choice}
            </Button>
          ))}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button>Don't know?</Button>
      </Box>
    </Paper>
  )
}
export default Question
