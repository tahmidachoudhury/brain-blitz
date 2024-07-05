import React from "react"
import { Box } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import CalculateIcon from "@mui/icons-material/Calculate"
import BiotechIcon from "@mui/icons-material/Biotech"
import SettingsIcon from "@mui/icons-material/Settings"
import { styled } from "@mui/material/styles"
import { keyframes } from "@mui/system"

const ClickableDivs = () => {
  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    }
    `

  const animationStyle = {
    transition: "all 0.3s ease",
    "&:hover": {
      animation: `${spin} 0.5s ease-in-out`,
    },
    fontSize: "5rem",
  }

  const commonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px", // Set the desired width
    padding: "8px",
    margin: "8px",
    fontSize: "20px",
    cursor: "pointer",
    border: "1px solid transparent",
    borderRadius: "4px",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      animationStyle,
      borderColor: "#3f51b5",
    },
    "&:active": {
      backgroundColor: "#e0e0e0",
    },
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={commonStyles}>
        <CalculateIcon sx={animationStyle} />
        GCSE Maths
      </Box>
      <Box sx={commonStyles}>
        <BiotechIcon sx={animationStyle} />
        GCSE Science
      </Box>
    </Box>
  )
}

export default ClickableDivs
