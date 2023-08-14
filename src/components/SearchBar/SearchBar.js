import "./SearchBar.css";

import { useState, useContext } from "react";
import { SearchContext } from "../../context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const { setSearch } = useContext(SearchContext);
  const navigate = useNavigate()

  const handleSearch = () => {
    setSearch(SearchQuery)
    navigate('/')
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyUp={(event) => {if (event.key === 'Enter') handleSearch()}}
      />
      <button onClick={() => handleSearch()}>Find</button>
    </div>
  );
};

export default SearchBar;
