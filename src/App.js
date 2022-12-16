import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);

  function createBook(bookName) {
    setBooks([...books, bookName]);
  }

  function deleteBook(index) {
    const updatedBooks = books.map((book, index) => {
        
    })
  }

  return (
    <div className="flex flex-col m-6">
      <BookList books={books} />
      <BookCreate handleCreateBook={createBook} />
    </div>
  );
}
