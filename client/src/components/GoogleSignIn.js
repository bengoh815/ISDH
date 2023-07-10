import { GoogleLogin } from "@react-oauth/google";
import { useGoogleSignin } from "../hooks/useGoogleSignin";

export default function GoogleSignIn() {
  const { googleLogin } = useGoogleSignin();
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        googleLogin(credentialResponse.credential);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
