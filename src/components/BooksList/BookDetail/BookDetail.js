import "./BookDetail.scss";

import { useEffect, useState } from "react";

import { getBookById } from "../../../api/booksApi";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const { bookId } = useParams();

  useEffect(() => {
    getBookById(bookId)
      .then((resp) => {
        setBook(resp.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [bookId]);

  if (error) {
    return <div className="book">Book not found.</div>;
  }

  if (!book) return <h2>Loading...</h2>;

  const {
    title,
    authors,
    description,
    imageLinks: { thumbnail },
  } = book.volumeInfo;

  return (
    <div className="book">
      {title && <h1>{title}</h1>}
      {authors && <h2>{authors.join(", ")}</h2>}
      {description && <div>{parse(description)}</div>}
      {thumbnail && <img src={thumbnail} alt={title} />}
    </div>
  );
};

export default BookDetail;
