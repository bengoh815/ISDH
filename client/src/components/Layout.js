import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import GoogleSignIn from "./GoogleSignIn";

export default function Layout({ children }) {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <main>{children}</main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/googlesignin" element={<GoogleSignIn />} />
        </Routes>
      </div>
    </Router>
  );
}
