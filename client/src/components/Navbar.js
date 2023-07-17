// npm
import { NavLink } from "react-router-dom";

// mui
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Home } from "@mui/icons-material";

// components
import Userbox from "./Userbox";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

/*
TODO 
  RESPONSIVE DESIGN
    make sure Dashboard and bell dissappear
*/

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export default function Navbar({ toggleDrawer }) {
  const { user } = useAuthContext();

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton component={NavLink} to="/" sx={{ color: "white" }}>
            <Home />
          </IconButton>
          <Typography>Tally-ho</Typography>
          {user ? (
            <Userbox />
          ) : (
            <Stack direction="row" gap="10px">
              <Button component={NavLink} to="/login" sx={{ color: "white" }}>
                Login
              </Button>
              <Button component={NavLink} to="/signup" sx={{ color: "white" }}>
                Sign Up
              </Button>
            </Stack>
          )}
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

// const smtg = <NavLink to="/login">Login</NavLink>
// const smtg = <NavLink to="/signup">Sign Up</NavLink>
