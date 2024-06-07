import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const addToBookshelf = (title) => {
    const newBookshelf = [...bookshelf, title];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  const removeFromBookshelf = (title) => {
    const newBookshelf = bookshelf.filter(book => book !== title);
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/bookshelf" className="bookshelf-button">My Bookshelf</Link>
        </nav>
        <Routes id="route-id">
          <Route exact path="/" element={<BookSearch onAddToBookshelf={addToBookshelf} bookshelf={bookshelf} />} />
          <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
