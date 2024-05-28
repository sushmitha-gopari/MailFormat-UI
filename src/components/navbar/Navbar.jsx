// Navbar.jsx

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar
} from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import "./navbar.css";
import { GridMenuIcon } from "@mui/x-data-grid";

const Navbar = () => {
  return (
    <div>
      <AppBar style={{backgroundColor: "rgb(160, 57, 228)"}}>
        <Toolbar>
          <IconButton color="inherit">
            {/* <GridMenuIcon /> */}
          </IconButton>
          <h3>ML-CNF</h3>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Stack direction="row" spacing={2}>
            <Link className="stack-links" to="/email"></Link>
            
            <Link className="stack-links" to="/email">Email</Link>
            
            <IconButton color="inherit">
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
