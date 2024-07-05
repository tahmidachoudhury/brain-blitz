import { Box, Button, TextField } from "@mui/material"
import React from "react"

export default function ChooseGameSection() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr" } }}>
      <Box item border="1px solid" xs={7}>
        <h3 style={{ fontSize: "3rem" }}>Anonymous</h3>
        <Box sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr" } }}>
          <Box item xs={6} textAlign="center">
            <img
              src="https://picsum.photos/200"
              style={{ borderRadius: "1000px" }}
            />
          </Box>

          <Box item xs={6}>
            <h3 style={{ fontSize: "3rem" }}>Choose a nickname</h3>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
        </Box>
        <Box textAlign="center">
          <Button>Start</Button>
        </Box>
      </Box>
      <Box item xs={5} border="1px solid">
        <h3 style={{ fontSize: "3rem" }}></h3>
      </Box>
    </Box>
  )
}
