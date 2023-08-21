import "./SearchBar.css";

import { useState, useContext } from "react";
import { SearchContext } from "../../context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const { setSearch, setLanguage, language } = useContext(SearchContext);
  const navigate = useNavigate()

  const handleSearch = () => {
    setSearch(SearchQuery)
    navigate('/')
  }

  const LanguageFilter = () => {
    const langSet = {
      en: "English",
      es: "Spanish",
      fr: "France",
      ru: "Russian",
      de: "German",
      ja: "Japanese",
      ka: "Korean",
      zh: "Chinese",
    }
    const sortedValues = Object.values(langSet).sort()
    sortedValues.unshift("> Language <")

    const handleClick = (e) => {
      console.log(`${e.target.name}:${e.target.value}`)
      setLanguage(e.target.value)
    }

    return (
      <select name="langRestrict" onInput={handleClick} value={language || ""} >
        {sortedValues.map((language, index) => 
          <option key={index} value={Object.keys(langSet).filter(k => langSet[k] === language)}>{language}</option>
        )}
      </select>
    )
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyUp={(event) => { if (event.key === 'Enter') handleSearch() }}
      />
      <LanguageFilter />
      <button onClick={() => handleSearch()}>Find</button>
    </div>
  );
};

export default SearchBar;
