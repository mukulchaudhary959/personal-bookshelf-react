import React from 'react';
import BookCard from './BookCard';

const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="container">
      <header>
        <h1>My Bookshelf</h1>
        <button onClick={() => window.history.back()}>Back to Search</button>
      </header>
      <div className="results">
        {bookshelf.length > 0 ? (
          bookshelf.map(title => (
            <BookCard
              key={title}
              book={{ title }}
              onRemoveFromBookshelf={onRemoveFromBookshelf}
              inBookshelf={true}
            />
          ))
        ) : (
          <p>Your bookshelf is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
