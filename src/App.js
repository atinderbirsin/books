import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);

  function createBook(bookName) {
    setBooks([...books, bookName]);
  }

  return (
    <div className="flex flex-col m-6">
      <BookCreate handleCreateBook={createBook} />
    </div>
  );
}
