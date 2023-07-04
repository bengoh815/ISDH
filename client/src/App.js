import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
import { useState } from "react";
import Mainbox from "./components/Mainbox";
import Userbox from "./components/Userbox";
import { LockOutlined } from "@mui/icons-material";
import SpacingHeader from "./components/SpacingHeader";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

function App() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
        {/* <ThemeProvider> */}
        {/* rest of the app */}
        {/* Leave this for now */}
        <StyledAppBar position="fixed">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>empty</Box>
            <Typography>Tally-ho</Typography>
          </Toolbar>
        </StyledAppBar>
        <SpacingHeader />
        <Signup />
        <Login />
        {/* </ThemeProvider> */}
      </GoogleOAuthProvider>
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
