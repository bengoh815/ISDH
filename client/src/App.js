import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { user } = useAuthContext();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Router>
        <Navbar toggleDrawer={toggleDrawer} />
        <Routes>
          <Route
            path="/"
            element={
              user ? <Home openDrawer={openDrawer} /> : <Navigate to="/login" />
            }
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

export default App;
