import { useContext, useDebugValue } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
    const { books } = useContext(BooksContext);

    useDebugValue(books, () => books.map(book => book.title));

    return useContext(BooksContext);
}

export default useBooksContext;