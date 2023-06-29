import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Userbox from "./Userbox";

const MenuBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

/*
TODO 
  RESPONSIVE DESIGN
    make sure Dashboard and bell dissappear
*/

export default function Navbar() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MenuBox>
            <IconButton aria-label="menu" size="medium">
              <Menu fontSize="inherit" sx={{ color: "white" }} />
            </IconButton>
            <Typography>Dashboard</Typography>
          </MenuBox>
          <Typography>Tally-ho</Typography>
          {/* TODO display only when logged in */}
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
