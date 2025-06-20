import { Box, Typography } from "@mui/material";
import React from "react";
import TodayTradeData from "../data/TodayTrade";

function TodayTrade() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        padding: "10px",
        borderRadius: "8px",
        margin: "20px 0px",
      }}
    >
      <Box
        sx={{
          background: "rgb(200 16 158)",
          padding: "10px",
          borderRadius: "8px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {TodayTradeData.map((trade) => (
          <Box
            key={trade.id}
            sx={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography color="rgb(200 16 158)" variant="h6">
              Bugungi Savdo:
            </Typography>
            <Typography color="rgb(200 16 158)" variant="body1">
              {trade.money.toLocaleString()} so'm
            </Typography>
            <Typography color="rgb(200 16 158)" variant="body1">
              {trade.ordersCount} ta zakaz
            </Typography>
            <Typography color="rgb(200 16 158)" variant="body1">
              Ko'p sotiladigan: {trade.fastSellCount} ta
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TodayTrade;
