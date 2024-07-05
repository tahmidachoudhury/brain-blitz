import { createTheme } from "@mui/material";
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
          borderRadius: "10%", // Customize the border radius here
        },
      },
    },
  },
});

export default theme;
