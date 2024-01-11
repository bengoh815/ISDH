import { TextField } from "@mui/material";
import { useState } from "react";

export default function DocSearch() {
  const [searchBar, setSearchBar] = useState("");

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
  };

  return (
    <>
      <TextField
        id="search-bar"
        label="Search"
        type="search"
        variant="standard"
        value={searchBar}
        onChange={handleSearchBar}
      />
    </>
  );
}
