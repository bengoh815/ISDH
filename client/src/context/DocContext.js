import { createContext, useReducer } from "react";

export const DocContext = createContext();

export const DOC_ACTIONS = {
  SET_DOC: "SET_DOCUMENTS",
  CREATE_DOC: "CREATE_DOCUMENTS",
  DELETE_DOC: "DELETE_DOCUMENTS",
};

export const docsReducer = (state, action) => {
  switch (action.type) {
    case DOC_ACTIONS.SET_DOC:
      return {
        docs: action.payload,
      };
    case DOC_ACTIONS.CREATE_DOC:
      return {
        docs: [action.payload, ...state.docs],
      };
    case DOC_ACTIONS.DELETE_DOC:
      return {
        docs: state.docs.filter((d) => d._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DocContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docsReducer, {
    docs: null,
  });

  return (
    <DocContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DocContext.Provider>
  );
};
