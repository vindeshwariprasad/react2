

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for Routes
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import CategoryPage from './pages/CategoryPage'; // Import the CategoryPage
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/browse-books" element={<BrowseBooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/category/:category" element={<CategoryPage />} /> 
        <Route path="*" element={<NotFoundPage />} /> {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;


