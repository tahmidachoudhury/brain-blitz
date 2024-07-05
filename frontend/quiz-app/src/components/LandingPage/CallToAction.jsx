import { Box, Button, Typography } from "@mui/material";

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
      py="1rem"
      sx={{ background: "rgb(217, 221, 255)" }}
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
      <Box
        component="img"
        src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        sx={{
          height: "30rem",
          width: "40rem",
          maxHeight: { xs: 233, md: 300 },
          maxWidth: { xs: 350, md: 500 },
          objectFit: "cover",
          borderRadius: "2rem",
        }}
      />
    </Box>
  );
};

export default CallToAction;
