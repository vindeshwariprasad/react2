



import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browse-books">Back to Browse</Link>
    </div>
  );
};

export default BookDetailsPage;

