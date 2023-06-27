import Layout from "./components/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
      <div className="App">
        <Layout></Layout>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
