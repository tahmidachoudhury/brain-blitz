import { Box, Button, Typography } from "@mui/material";
import q from "../../assets/q.png";
const CallToAction = () => {
  return (
    <Box
      display="flex"
      alignItems={{
        xs: "center",
      }}
      justifyContent={{
        sm: "center",
      }}
      flexDirection={{
        xs: "column",
        sm: "row",
      }}
      py="5rem"
      sx={{ background: "rgb(255, 226, 246)" }}
    >
      <Box
        width={{
          sm: "40rem",
          xs: "100%",
        }}
      >
        <Typography variant="h4" my="3rem" sx={{ fontWeight: "bold" }}>
          Fight and Win!
        </Typography>
        <Typography mb="3rem" variant="h5">
          A new innovative way of learning mathematics. Sign up to join the army
          of students battling to become the best!
        </Typography>
        <Button
          sx={{ mb: "3rem", py: "0.75rem" }}
          variant="contained"
          color="primary"
        >
          Sign up for free
        </Button>
        <Typography variant="body1">Do you have what it takes?</Typography>
      </Box>
      <Box display="flex">
        <Box
          component="img"
          src={q}
          sx={{
            height: "90rem",
            mx: "2rem",
            maxHeight: { xs: 233, md: 300 },
            maxWidth: { xs: 350, md: 500 },
            objectFit: "scale-down",
            borderRadius: "2rem",
          }}
        />
        <Box
          component="img"
          src={q}
          sx={{
            height: "40rem",
            maxHeight: { xs: 233, md: 300 },
            maxWidth: { xs: 350, md: 500 },
            objectFit: "scale-down",
            borderRadius: "2rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default CallToAction;
