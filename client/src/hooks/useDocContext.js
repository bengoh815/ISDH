import { DocsContext } from "../context/DocsContext";
import { useContext } from "react";

export const useDocsContext = () => {
  const context = useContext(DocsContext);

  if (!context) {
    throw Error("useDocsContext must be used in DocsContextProvider");
  }

  return context;
};
