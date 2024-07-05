import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import qna from "../../data/qna.json";

const Item = styled(Button)({
  height: 60,
  border: "1px solid black",
  borderRadius: "8px",
  lineHeight: "60px",
  paddingLeft: "10px",
});

export default function MCQQuestion() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {qna.map((item, index) => (
        <Paper
          elevation={3}
          square={false}
          key={item.id}
          sx={{
            px: 4,
            py: 2,
            minWidth: { xs: 0.8, sm: 0.6, md: 0.7, lg: 0.8 },
            my: 4,
            background: "rgb(233, 234, 251)",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Term</Typography>
            <Typography>{index + 1} of 20</Typography>
          </Box>
          <Box sx={{ pt: "1rem" }}>
            <Typography>{item.title}</Typography>
          </Box>
          <Box sx={{ pt: "3rem" }}>
            <Typography>Choose matching definition</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
                pt: 2,
              }}
            >
              {item.choices.map((choice,index) => (
                <Item item xs={6} key={index}>
                  {choice}
                </Item>
              ))}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button>Don't know?</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
