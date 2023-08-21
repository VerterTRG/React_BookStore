import "./App.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "../About/About";
import BookDetail from "../BooksList/BookDetail/BookDetail";
import BookList from "../BooksList/BookList";
import NotFound from "../NotFound/NotFound";
import { SearchContext, ThemeContext } from "../../context";
import { useState } from "react";
import Header from "../Header/Header";

function App() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  // const [filters, setFilters] = useState({}); // if should be add other filters
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SearchContext.Provider value={{ search, setSearch, language, setLanguage }}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:bookId" element={<BookDetail />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<NotFound />} />
              </Routes>

              {/* {selectedBook && <BookDetail />} */}
            </div>
          </div>
        </BrowserRouter>
      </SearchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
