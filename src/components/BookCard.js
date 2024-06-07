import React from 'react';

const BookCard = ({ book, onAddToBookshelf, onRemoveFromBookshelf, inBookshelf }) => {
  return (
    <div className="book-card" style={{ display: 'flex', flexDirection: 'column', width: '200px', height: '250px', border: '1px solid black', borderRadius: '5px', margin: '10px' }}>
      <p><strong>Book Title:</strong> {book.title}</p>
      <p><strong>Edition Count:</strong> {book.edition_count || 'Unknown'}</p>
      {inBookshelf ? (
        <button onClick={() => onRemoveFromBookshelf(book.title)} style={{ backgroundColor: 'red', border: 'none', borderRadius: '5px', color: 'white' }}>Remove</button>
      ) : (
        <button onClick={() => onAddToBookshelf(book.title)} style={{ backgroundColor: 'green', border: 'none', borderRadius: '5px', color: 'white' }}>Add to Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
