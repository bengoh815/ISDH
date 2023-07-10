import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { user: action.payload };
    case ACTIONS.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: ACTIONS.LOGIN, payload: user });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
