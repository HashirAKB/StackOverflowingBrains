import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import BookContextProvider from './BookContext'

function App() {
  return (
    <div className="App">
      <h1>Book Management App</h1>
      <BookContextProvider>
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
