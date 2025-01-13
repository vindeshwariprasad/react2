


import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const books = useSelector((state) => state.books); // Fetch books from Redux store
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`); // Navigate to the category page
  };

  const handleAddBookClick = () => {
    navigate('/add-book'); // Navigate to Add Book page
  };

  const handleBookClick = (id) => {
    navigate(`/books/${id}`); // Navigate to Book Details page
  };

  return (
    <div className="home-page-container">
      <h1>Welcome to the Online Library</h1>

      {/* Books by Category Section */}
      <section className="books-by-category-section">
        <h2>Books by Category</h2>
        <div className="category-buttons">
          <button onClick={() => handleCategoryClick('fiction')} className="category-button">
            Fiction
          </button>
          <button onClick={() => handleCategoryClick('non-fiction')} className="category-button">
            Non-Fiction
          </button>
          <button onClick={() => handleCategoryClick('sci-fi')} className="category-button">
            Sci-Fi
          </button>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <h2>Popular Books</h2>
        {books.length === 0 ? (
          <div className="no-books-container">
            <p>No books available yet. Add your first book!</p>
            <button className="add-book-button" onClick={handleAddBookClick}>
              Add Book
            </button>
          </div>
        ) : (
          <div className="popular-books-list">
            {books.slice(0, 3).map((book) => (
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
      </section>
    </div>
  );
};

export default HomePage;

