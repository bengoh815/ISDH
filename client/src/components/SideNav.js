// npm
import { useState } from "react";

// mui
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import {
  DarkMode,
  Dashboard,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  LightMode,
} from "@mui/icons-material";
import MuiDrawer from "@mui/material/Drawer";

// components
import SpacingHeader from "./SpacingHeader";
import Userbox from "./Userbox";

/* 
TODO
  Link dark mode to all theme
  fix open sidebar and userbox to be at bottom of sidenav
  have logo or smtg where spacing header should be
  figure out its responsive design
*/

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav() {
  // drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  // view mode
  const [viewMode, setViewMode] = useState("Dark");
  const toggleViewMode = () =>
    setViewMode(viewMode === "Dark" ? "Light" : "Dark");

  return (
    <Drawer variant="permanent" open={openDrawer}>
      <SpacingHeader />
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: openDrawer ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openDrawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Dashboard />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              sx={{ opacity: openDrawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ height: "70%" }} />
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: openDrawer ? "initial" : "center",
              px: 2.5,
            }}
            onClick={toggleViewMode}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openDrawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {viewMode === "Dark" ? <DarkMode /> : <LightMode />}
            </ListItemIcon>
            <ListItemText
              primary={viewMode + " mode"}
              sx={{ opacity: openDrawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={toggleDrawer}
            sx={{
              minHeight: 48,
              justifyContent: openDrawer ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openDrawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {openDrawer ? (
                <KeyboardDoubleArrowLeft />
              ) : (
                <KeyboardDoubleArrowRight />
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <Userbox openDrawer={openDrawer} />
      </List>
    </Drawer>
  );
}
