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
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
        {/* <ThemeProvider> */}
        {/* rest of the app */}
        <Navbar />
        {/* </ThemeProvider> */}
      </GoogleOAuthProvider>
    </>
  );
}

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
