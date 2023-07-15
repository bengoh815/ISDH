// npm
import { useState } from "react";

// mui
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

/*
TODO
  make the account settings go down
  fix account setting avatar size
  Expansion
    notifications for the account
*/

export default function User() {
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
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleMenuClick}
          aria-label="account-settings"
          size="small"
        >
          <Avatar sx={{ width: 32, height: 32 }}>
            {user.email[0].toUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>
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
          <Avatar /> My account
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
