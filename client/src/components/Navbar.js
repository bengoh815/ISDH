import { NavLink } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Userbox from "./Userbox";
import Menubox from "./Menubox";
import { useAuthContext } from "../hooks/useAuthContext";

/*
TODO 
  RESPONSIVE DESIGN
    make sure Dashboard and bell dissappear
  display userbox only when logged in
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
            <Box>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

// when no user
// const smtgLikeThis = (
//   <StyledAppBar position="fixed">
//     <Toolbar
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//       }}
//     >
//       <Box>empty</Box>
//       <Typography>Tally-ho</Typography>
//     </Toolbar>
//   </StyledAppBar>
// );

// const old = (
//   <AppBar position="sticky">
//     <Toolbar>
//       <NavLink to="/">
//         <FolderIcon />
//         <Typography sx={{ flexGrow: 1 }}>Document Manager</Typography>
//       </NavLink>
//       <Stack direction="row">
//         <NavLink to="/login">
//           <Button color="inherit">Log in</Button>
//         </NavLink>
//         <NavLink to="/signup">
//           <Button color="inherit">Sign Up</Button>
//         </NavLink>
//         <NavLink to="/googlesignin">
//           <Button color="inherit">Google Sign In</Button>
//         </NavLink>
//       </Stack>
//     </Toolbar>
//   </AppBar>
// );
