import React from "react";

const SearchBox = ({ fn }) => (
  <input id="search" type="search" placeholder="search" onKeyDown={fn} />
);

export default SearchBox;
