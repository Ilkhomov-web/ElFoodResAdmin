import { Box, Typography } from "@mui/material";
import React from "react";

function TableCard(props) {
  const { table } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.34)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "transform 0.2s",
        position: "relative",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.34)",
        },
      }}
    >
      <Box component={"img"} src="/public/resTable.jpg" width={"100px"}></Box>
      <Typography
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "red",
          padding: "7px 10px",
          borderRadius: "50px",
          color: "#fff",
        }}
      >
        #{table.id}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          background: table.order === true ? "red" : "gray",
          padding: "7px 10px",
          borderRadius: "50px",
          color: "#fff",
        }}
      >
        {table.order === true ? "Zakaz Mavjud" : "Mavjud emas"}
      </Typography>
    </Box>
  );
}

export default TableCard;
