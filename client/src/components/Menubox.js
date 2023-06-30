import {
  DarkMode,
  Dashboard,
  Description,
  LightMode,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const DrawerHeader = styled("div")(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Menubox() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [viewMode, setViewMode] = useState("Dark");

  const toggleViewMode = () =>
    setViewMode(viewMode === "Dark" ? "Light" : "Dark");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <IconButton
        onClick={() => setOpenDrawer(true)}
        aria-label="menu"
        size="medium"
      >
        <Menu fontSize="inherit" sx={{ color: "white" }} />
      </IconButton>
      <Typography>Dashboard</Typography>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
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
    </Box>
  );
}
