import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ onAddToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setResults(response.data.docs);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="container">
      <header>
        <h1>Search by book name</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
      </header>
      <div className="results">
        {results.map(book => (
          <BookCard
            key={book.key}
            book={book}
            onAddToBookshelf={onAddToBookshelf}
            inBookshelf={bookshelf.some(b => b === book.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
