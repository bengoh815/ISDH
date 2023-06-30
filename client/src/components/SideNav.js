import { useState } from "react";
import {
  DarkMode,
  Dashboard,
  Description,
  LightMode,
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

/* 
TODO
  Link dark mode to all theme
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

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function SideNav({ openDrawer }) {
  const [viewMode, setViewMode] = useState("Dark");

  const toggleViewMode = () =>
    setViewMode(viewMode === "Dark" ? "Light" : "Dark");

  return (
    <Drawer variant="permanent" open={openDrawer}>
      <DrawerHeader></DrawerHeader>
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
              <Description />
            </ListItemIcon>
            <ListItemText
              primary="Documents"
              sx={{ opacity: openDrawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
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
      </List>
    </Drawer>
  );
}
