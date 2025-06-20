import { Box, Typography } from "@mui/material";
import React from "react";

function TodayTrade() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        padding: "10px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          background: "rgb(200 16 158)",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            width: "15%",
            padding: "10px",
            borderRadius: "8px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography>Bugungi Savdo</Typography>
          <Typography>800.000 So'm</Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default TodayTrade;
