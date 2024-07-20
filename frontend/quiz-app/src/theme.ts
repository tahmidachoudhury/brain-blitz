import { createTheme } from "@mui/material"
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(89, 97, 175)",
    },
    secondary: {
      main: "rgb(241, 134, 208)",
    },
    accent: {
      main: "rgb(93, 107, 232)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-success": {
            backgroundColor: "#28a745",
            color: "white",
            "&:hover": {
              backgroundColor: "#218838",
            },
          },
          borderRadius: "10%", // Customize the border radius here
        },
      },
    },
  },
})

export default theme
