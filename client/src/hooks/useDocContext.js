import { DocContext } from "../context/DocContext";
import { useContext } from "react";

export const useDocContext = () => {
  const context = useContext(DocContext);

  if (!context) {
    throw Error("useDocContext must be used in DocContextProvider");
  }

  return context;
};
