// npm
import { useState } from "react";

// mui
import {
  Avatar,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

/*
TODO
  Expansion
    notifications for the account
*/

export default function Userbox({ openDrawer }) {
  // context
  const { user } = useAuthContext();

  // popup menu
  const [menuAnchor, setMenuAnchor] = useState(null);
  const handleMenuClick = (e) => setMenuAnchor(e.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  // hooks
  const { logout } = useLogout();
  const handleLogout = () => {
    handleMenuClose();
    logout();
  };

  const openMenu = Boolean(menuAnchor);

  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={handleMenuClick}
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
            <Avatar sx={{ width: 28, height: 28 }}>
              {user.email[0].toUpperCase()}
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={user.email.split("@")[0]}
            sx={{ opacity: openDrawer ? 1 : 0, textOverflow: "ellipsis" }}
          >
            {user.email.split("@")[0]}
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <Menu
        id="account-menu"
        anchorEl={menuAnchor}
        open={openMenu}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar sx={{ width: 32, height: 32 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
