import { NavLink } from "react-router-dom";

import { AppBar } from "@mui/material";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/login">
        <Button variant="contained">Log in</Button>
      </NavLink>
      <NavLink to="/signup">
        <Button variant="contained">Sign Up</Button>
      </NavLink>
      <NavLink to="/googlesignin">
        <Button variant="contained">Google Sign In</Button>
      </NavLink>
    </div>
  );
}
