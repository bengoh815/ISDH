import { NavLink } from "react-router-dom";

import { AppBar, Stack, Button, Toolbar, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <FolderIcon />
          <Typography sx={{ flexGrow: 1 }}>Document Manager</Typography>
        </NavLink>
        <Stack direction="row">
          <NavLink to="/login">
            <Button color="inherit">Log in</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button color="inherit">Sign Up</Button>
          </NavLink>
          <NavLink to="/googlesignin">
            <Button color="inherit">Google Sign In</Button>
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
