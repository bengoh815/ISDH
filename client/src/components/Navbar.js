import { NavLink } from "react-router-dom";

import { Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Userbox from "./Userbox";
import Menubox from "./Menubox";

/*
TODO 
  RESPONSIVE DESIGN
    make sure Dashboard and bell dissappear
  display userbox only when logged in
*/

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed">
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
