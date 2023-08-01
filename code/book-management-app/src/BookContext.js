import React, {useContext, useState, useEffect, createContext } from "react";
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    useEffect( () => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const addBook = ( (title) => {
        setBooks([...books, {id: Date.now(), title}]);
    });

    const removeBook = ( (id) => {
        setBooks(books.filter((book) => book.id !== id));
    });

    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
};
export default BookContextProvider;