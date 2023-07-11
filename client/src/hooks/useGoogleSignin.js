import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { AUTH_ACTIONS } from "../context/AuthContext";

/*
TODO
Is error handling for axios correct?
isLoading and error necessary? 
*/

export const useGoogleSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const googleLogin = async (token) => {
    setIsLoading(true);
    setError(null);

    const headers = { "Content-Type": "application/json" };
    const data = JSON.stringify({ googleToken: token });

    await axios
      .post("http://localhost:8000/api/user/googlesignin", data, {
        headers: headers,
      })
      .then((response) => {
        const json = response.data;
        // save user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch({ type: AUTH_ACTIONS.LOGIN, payload: json });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setError(error.response.data);
        setIsLoading(false);
      });
  };

  return { googleLogin, isLoading, error };
};
