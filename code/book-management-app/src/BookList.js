import React, {useContext} from 'react';
import {BookContext} from './BookContext';

const BookList = () => {
    const {books, removeBook} = useContext(BookContext);

    return(
        <div className='book-list'>
            {books.map((book) => (
                <div className='book' key={book.id}>
                    <span>{book.title}</span>
                    <button onClick={() => removeBook(book.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}
export default BookList;