import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />
    </Box>
  );
}

export default HomePage;
