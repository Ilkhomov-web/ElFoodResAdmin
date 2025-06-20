import { Box, Button, Container, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import RestaurantTable from "../data/RestaurantTable";
import TableCard from "../components/TableCard";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function RestaurantTableCreatePage() {
  const [table, setTable] = useState(RestaurantTable);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCreateTable = () => {
    const newTable = {
      id: table.length + 1,
      tableNumber: table.length + 1,
      order: false,
    };
    if (table.length === 15) {
      setOpenSnackbar(true);
      return;
    }
    setTable([...table, newTable]);
    console.log(table);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
          <Button
            onClick={handleCreateTable}
            sx={{ background: "rgb(200 16 158)", color: "white" }}
          >
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
          {table.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Siz Max 50 Ta Stol Yarata Olasiz!"
        action={action}
        ContentProps={{
          sx: {
            backgroundColor: "rgb(200 16 158)", // o'zingiz xohlagan rang
            color: "white",
          },
        }}
      />
    </Box>
  );
}

export default RestaurantTableCreatePage;
