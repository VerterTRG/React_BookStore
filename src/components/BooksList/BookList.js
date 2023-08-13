import "./BookList.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getBookBySearchTerm } from "../../api/booksApi";

const BookList = ({ search, onSelectBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (search) {
      getBookBySearchTerm(search)
        .then((resp) => {
          if (resp.data.items) {
            setBooks(resp.data.items);
          } else {
            setBooks([]);
          }
        })
        .catch((err) => console.log("err"));
    }
  }, [search]);

  return (
    <div className="books">
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <Link to={`/book/${book.id}`} title={book.volumeInfo.title}>
              {book.volumeInfo.title}
            </Link>
            {/* <a title="book name" href="#" onClick={() => onSelectBook(book.id)}>
              {book.volumeInfo.title}
            </a> */}
          </li>
        ))}
      </ul>
      {/* {books.map((book, index) => (
        <Link key={index} title={book.volumeInfo.title}>{book.volumeInfo.title}</Link>
        ))} */}
    </div>
  );
};

export default BookList;
