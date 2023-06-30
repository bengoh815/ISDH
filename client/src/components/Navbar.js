import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, styled, useTheme } from "@mui/material";
import Userbox from "./Userbox";
import Menubox from "./Menubox";

/*
TODO 
  RESPONSIVE DESIGN
    make sure Dashboard and bell dissappear
  display userbox only when logged in
*/

export default function Navbar() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Menubox />
          <Typography>Tally-ho</Typography>
          <Userbox />
        </Toolbar>
      </AppBar>
    </>
  );
}

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
