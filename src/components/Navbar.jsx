import { Badge, Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { toggleDrawer } = props;
  return (
    <div
      style={{
        width: "100%",
        background: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Typography variant="h4" color="primary">
                FoodQr
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 8px",
                border: "1px solid #D2D6DA",
                borderRadius: "12px",
              }}
            >
              <SearchIcon sx={{ color: "#67748E" }} />
              <input
                type="text"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "18px",
                  color: "#67748E",
                }}
                placeholder="Type here…"
              />
            </Box>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <Button sx={{ color: "#67748E" }}>
                <AccountCircleIcon sx={{ color: "#67748E" }} />
                Sign In
              </Button>
            </Link>
            <Button>
              <SettingsIcon sx={{ color: "#67748E" }} />
            </Button>

            <Button>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon sx={{ color: "#67748E" }} color="action" />
              </Badge>
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Navbar;
