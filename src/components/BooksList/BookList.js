import "./BookList.css";

import { useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { getBookBySearchTerm } from "../../api/booksApi";
import Pagination from "../Pagination/Pagination";

const BookList = ({ search, onSelectBook }) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (search) {
      getBookBySearchTerm(search, currentPage)
        .then((resp) => {
          if (resp.data.items) {
            setBooks(resp.data.items);
          } else {
            setBooks([]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [search, currentPage]);

  const memorizeBook = useMemo(() => 
    books.map((book, index) => (
      <li key={index}>
        <Link to={`/book/${book.id}`} title={book.volumeInfo.title}>
          {book.volumeInfo.title}
        </Link>
      </li>
    )), [books]) // TODO useMemo() not working well

  return (
    <div className="books">
      <h1>Books</h1>
      <ul>{memorizeBook}</ul>
      <Pagination currentPage={currentPage} udpdatePage={setCurrentPage} />
    </div>
  );
};

export default BookList;
