import { Box } from "@mui/material"
import ResponsiveAppBar from "../ResponsiveAppbar"
import React from "react"
import CallToAction from "./CallToAction"
import ClickableDivs from "./Buttons"
import ChooseGameSection from "./GameSelect"

function LandingPage() {
  return (
    <Box>
      <CallToAction />
      <ClickableDivs />
      <ChooseGameSection />
    </Box>
  )
}

export default LandingPage
