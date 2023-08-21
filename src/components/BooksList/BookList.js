import "./BookList.css";

import { useContext, useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { getBookBySearchTerm } from "../../api/booksApi";
import Pagination from "../Pagination/Pagination";
import { SearchContext } from "../../context";

const BookList = () => {
  const { search, language } = useContext(SearchContext)
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10)
  const filter = {}

  useEffect(() => {
    if (language) filter.langRestrict = language;
    if (search) {
      getBookBySearchTerm(search, currentPage, limit, filter)
        .then((resp) => {
          if (resp.data.items) {
            setBooks(resp.data.items);
          } else {
            setBooks([]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [search, currentPage, limit, language]);

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
      {search && !!books.length && (
        <Pagination
          currentPage={currentPage}
          udpdatePage={setCurrentPage}
          updateVeiwCount={setLimit} />
      )}
    </div>
  );
};

export default BookList;
