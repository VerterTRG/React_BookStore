import "./App.scss";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import BookDetail from "../BooksList/BookDetail/BookDetail";
import BookList from "../BooksList/BookList";
import NotFound from "../NotFound/NotFound";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  // const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="container" style={{ margin: 50 }}>
          <SearchBar setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<BookList search={search} />} />
            <Route path="/book/:bookId" element={<BookDetail />} />
            
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>

          {/* {selectedBook && <BookDetail />} */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
