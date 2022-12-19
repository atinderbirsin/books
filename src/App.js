import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";
import api from "./api";

export default function App() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const data = await api.get("http://localhost:3001/books");
    setBooks(data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  async function createBook(title) {
    const newBook = await api.post("http://localhost:3001/books/", title);
    setBooks([...books, newBook]);
  }

  async function deleteBook(index) {
    const response = await api.remove(`http://localhost:3001/books/${index}`);
    if (response !== null) {
      const updatedBooks = books.filter((book) => book.id !== index);
      setBooks(updatedBooks);
    }
  }

  async function editBook(index, newTitle) {
    const response = await api.put(
      `http://localhost:3001/books/${index}`,
      { title: newTitle },
    );

    if (response) {
      const updatedBooks = books.map((book) => {
        if (book.id === index) {
          return { ...book, ...response };
        }

        return book;
      });
      setBooks(updatedBooks);
    }
  }

  return (
    <div className="flex flex-col">
      <BookList
        books={books}
        handleDeleteBook={deleteBook}
        handleEditBook={editBook}
      />
      <BookCreate handleCreateBook={createBook} />
    </div>
  );
}
