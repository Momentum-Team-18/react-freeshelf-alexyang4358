import "./App.css";
import bookData from "./book-data.json";
import Book from "./Book";

function App() {
  return (
    <div className="container">
      {bookData.map((book) => (
        <Book book={book} key={book.author} />
      ))}
    </div>
  );
}

export default App;
