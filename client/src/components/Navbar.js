// npm
import { NavLink } from "react-router-dom";

// mui
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

// components
import Userbox from "./Userbox";
import Menubox from "./Menubox";

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
          {user && <Menubox toggleDrawer={toggleDrawer} />}

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
