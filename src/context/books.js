import { createContext, useCallback, useState } from "react";
import api from "../api";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const getBooks =  async () => {
        const data = await api.get("http://localhost:3001/books");
        setBooks(data);
    };

    const stableGetBooks = useCallback(
        getBooks,
        []
    )

    const createBook = async (title) => {
        const newBook = await api.post("http://localhost:3001/books/", title);
        setBooks([...books, newBook]);
    };

    const deleteBook = async (index) => {
        const response = await api.remove(`http://localhost:3001/books/${index}`);
        if (response !== null) {
        const updatedBooks = books.filter((book) => book.id !== index);
        setBooks(updatedBooks);
        }
    };

    const updateBook = async (index, newTitle) => {
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
    };

    const valueToShare = {
        books,
        getBooks: stableGetBooks,
        createBook,
        deleteBook,
        updateBook,
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;