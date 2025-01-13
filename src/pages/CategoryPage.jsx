import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CategoryPage.css';


const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the route
  const books = useSelector((state) => state.books); // Fetch books from Redux
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) => book.category === category);

  const handleAddBookClick = () => {
    navigate('/add-book');
  };

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <div className="category-page-container">
      <h1>Books in {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {filteredBooks.length === 0 ? (
        <div className="no-books-container">
          <p>No books available in this category.</p>
          <button className="add-book-button" onClick={handleAddBookClick}>
            Add Book
          </button>
        </div>
      ) : (
        <div className="books-list">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="book-card"
              onClick={() => handleBookClick(book.id)}
            >
              <h3 className="book-title">{book.title}</h3>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="back-to-home">
        Back to Home
      </Link>
    </div>
  );
};

export default CategoryPage;
