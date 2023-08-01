import React, { useState, useContext } from 'react';
import { BookContext } from './BookContext';

const AddBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState(''); // Use array indexing to access the state value and setter function

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Use setTitle to update the state value
        placeholder="Book Title"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
