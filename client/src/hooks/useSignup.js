import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { AUTH_ACTIONS } from "../context/AuthContext";

/*
TODO
Is error handling for axios correct?
*/

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const headers = { "Content-Type": "application/json" };
    const data = JSON.stringify({ name, email, password });

    await axios
      .post("http://localhost:8000/api/user/signup", data, {
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
        setError(error.response.data);
        setIsLoading(false);
      });
  };

  return { signup, isLoading, error };
};
