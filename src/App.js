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
    const updatedBooks = books.filter(book => book.id !== index);

    setBooks(updatedBooks);
  }

  function editBook(index, newTitle) {
    const updatedBooks = books.map(book => {
        if(book.id === index) {
            return { ...book, title:newTitle };
        }

        return book;
    })
    setBooks(updatedBooks);
  }

  return (
    <div className="flex flex-col m-6">
      <BookList books={books} handleDeleteBook={deleteBook} handleEditBook={editBook} />
      <BookCreate handleCreateBook={createBook} />
    </div>
  );
}
