// npm
import { createContext, useReducer } from "react";

export const DocContext = createContext();

export const DOC_ACTIONS = {
  SET_DOC: "SET_DOCUMENTS",
  CREATE_DOC: "CREATE_DOCUMENTS",
  UPDATE_DOC: "UPDATE_DOCUMENTS",
  DELETE_DOC: "DELETE_DOCUMENTS",
  // SORT 
  // DATE with null values behind
  SORT_DATE_ASC_NULL: "DATE_SORT_ASC_NULL",
  SORT_DATE_DES_NULL: "DATE_SORT_DES_NULL",
  SORT_ALPHABET_ASC: "SORT_ALPHABET_ASC",
  SORT_ALPHABET_DES: "SORT_ALPHABET_DES",
};

export const DOC_STATUS = {
  OKAY: "okay",
  ONGOING: "ongoing",
  EXPIRING: "expiring",
  EXPIRED: "expired",
};


export const docsReducer = (state, action) => {
  switch (action.type) {
    case DOC_ACTIONS.SET_DOC:
      return {
        docs: action.payload.map((p) => {
          p.display = 1;
          return p;
        }),
      };
    case DOC_ACTIONS.CREATE_DOC:
      return {
        docs: [action.payload, ...state.docs],
      };
    case DOC_ACTIONS.UPDATE_DOC:
      return {
        docs: state.docs.map((d) =>
          d._id === action.payload._id ? action.payload : d
        ),
      };
    case DOC_ACTIONS.DELETE_DOC:
      return {
        docs: state.docs.filter((d) => d._id !== action.payload._id),
      };

    case DOC_ACTIONS.SORT_DATE_ASC_NULL:
      return {
        docs: state.docs.sort((a, b) => {
          if (a.expirationDate === null && b.expirationDate === null) {
            return 0;
          } else if (a.expirationDate === null) {
            return 1;
          } else if (b.expirationDate === null) {
            return -1;
          } else {
            return new Date(b.expirationDate) - new Date(a.expirationDate);
          }
        }),
      };
    case DOC_ACTIONS.SORT_DATE_DES_NULL:
      return {
        docs: state.docs.sort((a, b) => {
          if (a.expirationDate === null && b.expirationDate === null) {
            return 0;
          } else if (a.expirationDate === null) {
            return 1;
          } else if (b.expirationDate === null) {
            return -1;
          } else {
            return new Date(a.expirationDate) - new Date(b.expirationDate);
          }
        }),
      };
    case DOC_ACTIONS.SORT_ALPHABET_ASC:
      break;
    case DOC_ACTIONS.SORT_ALPHABET_DES:
      break;
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
