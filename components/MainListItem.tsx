import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Activelink from "../pages/Activelink";

const MainListItems = () => {
  return (
    <React.Fragment>
      <Activelink href="/">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Top" />
        </ListItemButton>
      </Activelink>
      <Activelink href="/About">
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="About me" />
        </ListItemButton>
      </Activelink>
      <Activelink href="/Portfolio">
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItemButton>
      </Activelink>
      <Activelink href="/Contact">
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </Activelink>
    </React.Fragment>
  );
};
export default MainListItems;
