import { useAuthContext } from "./useAuthContext";
import { useDocContext } from "./useDocContext";
import { AUTH_ACTIONS } from "../context/AuthContext";
import { DOC_ACTIONS } from "../context/DocContext";

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: docDispatch } = useDocContext();

  const logout = () => {
    // remover user from local storage
    localStorage.removeItem("user");

    // dispatch logout action
    authDispatch({ type: AUTH_ACTIONS.LOGOUT });

    // clear data
    docDispatch({ type: DOC_ACTIONS.SET_DOC, payload: null });
  };

  return { logout };
};
