import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  const { toggleDrawer, open } = props;
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          disablePadding
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Link
            to={"/"}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "rgb(200 16 158)",
            }}
          >
            <ListItemButton sx={{ width: "100%" }}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "rgb(200 16 158)" }} />
              </ListItemIcon>
              <ListItemText color="rgb(200 16 158)" primary={"Home"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          disablePadding
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Link
            to={""}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "rgb(200 16 158)",
            }}
          >
            <ListItemButton sx={{ width: "100%" }}>
              <ListItemIcon>
                <NoteAddIcon sx={{ color: "rgb(200 16 158)" }} />
              </ListItemIcon>
              <ListItemText
                color="rgb(200 16 158)"
                primary={"Create Restaurant"}
              />
            </ListItemButton>
          </Link>
          <Link
            to={""}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "rgb(200 16 158)",
            }}
          >
            <ListItemButton sx={{ width: "100%" }}>
              <ListItemIcon>
                <RequestQuoteIcon sx={{ color: "rgb(200 16 158)" }} />
              </ListItemIcon>
              <ListItemText color="rgb(200 16 158)" primary={"Payment Info"} />
            </ListItemButton>
          </Link>
          <Link
            to={"/restaurant-list"}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "rgb(200 16 158)",
            }}
          >
            <ListItemButton sx={{ width: "100%" }}>
              <ListItemIcon>
                <FormatListNumberedIcon sx={{ color: "rgb(200 16 158)" }} />
              </ListItemIcon>
              <ListItemText
                color="rgb(200 16 158)"
                primary={"Restaurant List"}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
