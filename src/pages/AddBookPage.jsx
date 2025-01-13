

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';
import { useNavigate  } from 'react-router-dom';
import './AddBookPage.css';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('fiction'); // Default category

  const dispatch = useDispatch();
  const history = useNavigate ();
  const books = useSelector((state) => state.books); // Access existing books to generate a new ID

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a new unique ID for the book
    const newId = books.length ? books[books.length - 1].id + 1 : 1;
    const newBook = { id: newId, title, author, description, rating, category };

    // Add the new book to the store
    dispatch(addBook(newBook));

    
    history('/browse-books');
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="input-field"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
          className="input-field"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="textarea-field"
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating (1-5)"
          required
          className="input-field"
          min="1"
          max="5"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="dropdown-field"
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;


