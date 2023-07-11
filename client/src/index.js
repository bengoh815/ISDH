import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "./context/AuthContext";
import { DocsContextProvider } from "./context/DocContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
      <AuthContextProvider>
        <DocsContextProvider>
          {/* <ThemeProvider> */}
          <App />
          {/* </ThemeProvider> */}
        </DocsContextProvider>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
