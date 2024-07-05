import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(89, 97, 175)",
    },
    secondary: {
      main: "rgb(153, 159, 222)",
    },
    accent: {
      main: " rgb(105, 116, 226)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10%', // Customize the border radius here
        },
      },
    },
  },
});

export default theme;
