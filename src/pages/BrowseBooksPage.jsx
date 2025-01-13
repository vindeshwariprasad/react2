


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './BrowseBooksPage.css';

const BrowseBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { category } = useParams();  // Dynamic category
  const books = useSelector((state) => state.books);

  // Filter books by category
  const filteredBooks = books.filter(
    (book) => book.category === category || category === undefined
  );

  // Handle search by title or author
  const filteredAndSearchedBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-books-container">
      <h2>Browse Books</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="book-list">
        {filteredAndSearchedBooks.length > 0 ? (
          filteredAndSearchedBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <Link to={`/books/${book.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No books available in this category.</p>
        )}
      </div>

      {/* Add book button if no books found */}
      {filteredAndSearchedBooks.length === 0 && (
        <Link to="/add-book" className="add-book-button">Add Book</Link>
      )}
    </div>
  );
};

export default BrowseBooksPage;

