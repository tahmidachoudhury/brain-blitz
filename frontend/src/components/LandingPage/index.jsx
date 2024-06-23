import { Box } from "@mui/material"
import ResponsiveAppBar from "../ResponsiveAppbar"
import React from "react"
import CallToAction from "./CallToAction"
import ClickableDivs from "./Buttons"

function LandingPage() {
  return (
    <Box>
      <CallToAction />
      <ClickableDivs />
    </Box>
  )
}

export default LandingPage
