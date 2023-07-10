import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

/*
TODO
Is error handling for axios correct?
*/

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const headers = { "Content-Type": "application/json" };
    const data = JSON.stringify({ email, password });

    await axios
      .post("http://localhost:8000/api/user/login", data, {
        headers: headers,
      })
      .then((response) => {
        const json = response.data;
        // save user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setError(error.response.data);
        setIsLoading(false);
      });
  };

  return { login, isLoading, error };
};
