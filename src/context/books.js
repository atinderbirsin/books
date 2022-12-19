import { createContext, useState } from "react";
import api from "../api";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const valueToShare = {
        books,
        getBooks: async () => {
            const data = await api.get("http://localhost:3001/books");
            setBooks(data);
        },
        createBook: async (title) => {
            const newBook = await api.post("http://localhost:3001/books/", title);
            setBooks([...books, newBook]);
        },
        deleteBook: async (index) => {
            const response = await api.remove(`http://localhost:3001/books/${index}`);
            if (response !== null) {
            const updatedBooks = books.filter((book) => book.id !== index);
            setBooks(updatedBooks);
            }
        },
        updateBook: async (index, newTitle) => {
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
        },
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;