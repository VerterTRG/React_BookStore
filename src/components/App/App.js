import "./App.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "../About/About";
import BookDetail from "../BooksList/BookDetail/BookDetail";
import BookList from "../BooksList/BookList";
import NotFound from "../NotFound/NotFound";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeContext } from "../../context";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <BrowserRouter>
        <div className="app">
          <div className="container" style={{ margin: 50 }}>
            <SearchBar setSearch={setSearch} />
            <ThemeToggler />
            <Routes>
              <Route path="/" element={<BookList search={search} />} />
              <Route path="/book/:bookId" element={<BookDetail />} />
              <Route path="/about" element={<About />} />

              <Route path="*" element={<Navigate to="/404" />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>

            {/* {selectedBook && <BookDetail />} */}
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
