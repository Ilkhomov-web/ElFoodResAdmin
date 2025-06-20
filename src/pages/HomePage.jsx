import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import TableCard from "../components/TableCard";
import RestaurantTable from "../data/RestaurantTable";
import TodayTrade from "../components/TodayTrade";

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ margin: "20px 0px", color: "rgb(200 16 158)" }}
        >
          Restaurant Table
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "38px",
            justifyContent: "left",
            marginBottom: "30px",
          }}
        >
          {RestaurantTable.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </Box>
        <TodayTrade />
      </Container>
    </Box>
  );
}

export default HomePage;
