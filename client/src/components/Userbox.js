import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Popover,
  Tooltip,
} from "@mui/material";
import { Logout, Notifications, Settings } from "@mui/icons-material";
import NotificationCard from "./NotificationCard";

/*
TODO
  badgeContent is dynamic
  avatar is dynamic
*/

export default function Userbox() {
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleNotifClick = (e) => setNotifAnchor(e.currentTarget);
  const handleNotifClose = () => setNotifAnchor(null);

  const handleMenuClick = (e) => setMenuAnchor(e.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  const openNotif = Boolean(notifAnchor);
  const openMenu = Boolean(menuAnchor);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Tooltip title="Notifications">
        <IconButton
          onClick={handleNotifClick}
          aria-label="notifications"
          size="medium"
        >
          <Badge color="error" badgeContent={1}>
            <Notifications fontSize="inherit" sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleMenuClick}
          aria-label="notifications"
          size="small"
          sx={{ ml: 2 }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
        </IconButton>
      </Tooltip>
      <Popover
        id="account-notifications"
        anchorEl={notifAnchor}
        open={openNotif}
        onClose={handleNotifClose}
        onClick={handleNotifClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
      </Popover>
      <Menu
        id="account-menu"
        anchorEl={menuAnchor}
        open={openMenu}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
