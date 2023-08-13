import "./SearchBar.css";

import { useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [SearchQuery, setSearchQuery] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={() => setSearch(SearchQuery)}>Find</button>
    </div>
  );
};

export default SearchBar;
