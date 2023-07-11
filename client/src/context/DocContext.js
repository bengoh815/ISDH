import { createContext, useReducer } from "react";

export const DocsContext = createContext();

const ACTIONS = {
  SET_DOC: "SET_DOCUMENTS",
  CREATE_DOC: "CREATE_DOCUMENTS",
  DELETE_DOC: "DELETE_DOCUMENTS",
};

export const docsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DOC:
      return {
        docs: action.payload,
      };
    case ACTIONS.CREATE_DOC:
      return {
        docs: [action.payload, ...state.docs],
      };
    case ACTIONS.DELETE_DOC:
      return {
        docs: state.docs.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DocsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docsReducer, {
    docs: null,
  });

  return (
    <DocsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DocsContext.Provider>
  );
};
