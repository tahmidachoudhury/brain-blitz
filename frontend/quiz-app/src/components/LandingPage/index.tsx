import { Box } from "@mui/material"
import ResponsiveAppBar from "../ResponsiveAppbar"
import React from "react"
import CallToAction from "./CallToAction"
import ChooseGameSection from "./GameSelect"

function LandingPage() {
  return (
    <Box>
      <CallToAction />
      <ChooseGameSection />
    </Box>
  )
}

export default LandingPage
