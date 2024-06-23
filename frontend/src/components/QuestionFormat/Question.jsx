import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/system"

const Item = styled(Paper)({
  height: 60,
  border: "1px solid black",
  borderRadius: "8px",
  lineHeight: "60px",
  paddingLeft: "10px",
})

export default function MCQQuestion() {
  return (
    <Box display="flex" justifyContent="center">
      <Paper
        square={false}
        sx={{
          pl: 6,
          pr: 6,
          pt: 3,
          pb: 3,
          minWidth: { xs: 0.8, sm: 0.6, md: 0.7, lg: 0.8 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Term</Typography>
          <Typography>10 of 20</Typography>
        </Box>
        <Box sx={{ pt: "1rem" }}>
          <Typography>
            What type of cell activity occurs in the meristem regions of plants?
          </Typography>
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
            <Item item xs={6}>
              Mitosis
            </Item>
            <Item item xs={6}>
              Photosynthesis
            </Item>
            <Item item xs={6}>
              Storage of sugar
            </Item>
            <Item item xs={6}>
              Secondary growth
            </Item>
            <Item item xs={6}>
              Increased water uptake of cells
            </Item>
          </Box>
        </Box>
        <Button>Don't know?</Button>
      </Paper>
    </Box>
  )
}
