import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GoogleSignIn from "./components/GoogleSignIn";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import SideNav from "./components/SideNav";
import { useContext, useEffect, useState } from "react";
import Mainbox from "./components/Mainbox";
import Userbox from "./components/Userbox";
import { LockOutlined } from "@mui/icons-material";
import SpacingHeader from "./components/SpacingHeader";
import Dashboard from "./components/Dashboard";
import { AuthContext } from "./context/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { user } = useAuthContext();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      {/* rest of the app */}
      {/* Leave this for now */}

      {/* <SpacingHeader /> */}
      {/* <Dashboard /> */}
      <Router>
        <Navbar toggleDrawer={toggleDrawer} />
        <SideNav openDrawer={openDrawer} />

        {/* All other things */}

        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

// const working = (        <Navbar toggleDrawer={toggleDrawer} />
// <Stack direction="row" spacing={2} justifyContent="space-between">
//   <SideNav openDrawer={openDrawer} />
//   <Mainbox />
// </Stack>);

// const temp = (
//   <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
//     <Router>
//       <Navbar />

//       {/* All other things */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/googlesignin" element={<GoogleSignIn />} />
//       </Routes>
//     </Router>
//   </GoogleOAuthProvider>
// );
export default App;
