import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "./context/AuthContext";
import { DocContextProvider } from "./context/DocContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
      <AuthContextProvider>
        <DocContextProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/* <ThemeProvider> */}
            <App />
            {/* </ThemeProvider> */}
          </LocalizationProvider>
        </DocContextProvider>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
