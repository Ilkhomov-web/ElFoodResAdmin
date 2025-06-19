import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import RestaurantTable from "../data/RestaurantTable";
import TableCard from "../components/TableCard";

function RestaurantTableCreatePage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ margin: "20px 0px", color: "rgb(200 16 158)" }}
          >
            Restaurant Table
          </Typography>
          <Button sx={{ background: "rgb(200 16 158)", color: "white" }}>
            Create Table
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "38px",
            justifyContent: "left",
          }}
        >
          {RestaurantTable.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default RestaurantTableCreatePage;
