// router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// context
import { useAuthContext } from "./hooks/useAuthContext";

// components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  // context
  const { user } = useAuthContext();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/dashboard" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
