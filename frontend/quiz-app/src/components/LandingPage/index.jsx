import { Box } from "@mui/material"
import ResponsiveAppBar from "./ResponsiveAppbar"
import React from "react"
import CallToAction from "./CallToAction"

function LandingPage() {
  return (
    <Box>
      <ResponsiveAppBar />
      <CallToAction />
    </Box>
  )
}

export default LandingPage
