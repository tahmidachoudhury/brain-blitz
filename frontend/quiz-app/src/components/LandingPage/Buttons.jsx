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

  const commonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px", // Set the desired width
    padding: "8px",
    margin: "8px",
    fontSize: "20px", // Set the desired font size
    cursor: "pointer",
    border: "1px solid transparent",
    borderRadius: "4px",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f0f0f0", // Change to the desired hover color
      borderColor: "#3f51b5", // Change to the desired hover border color
    },
    "&:active": {
      backgroundColor: "#e0e0e0", // Change to the desired active color
    },
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={commonStyles}>
        <CalculateIcon
          sx={{
            animation: `${spin} 2s infinite ease-in-out`,
            fontSize: "5rem",
          }}
        />
        GCSE Maths
      </Box>
      <Box sx={commonStyles}>
        <BiotechIcon
          sx={{
            animation: `${spin} 2s infinite ease-in-out`,
            fontSize: "5rem",
          }}
        />
        GCSE Science
      </Box>
    </Box>
  )
}

export default ClickableDivs
