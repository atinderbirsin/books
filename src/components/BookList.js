import BookShow from "./BookShow";

export default function BookList({ books, handleDeleteBook, handleEditBook }) {
  const renderedList = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      handleDeleteBook={handleDeleteBook}
      handleEditBook={handleEditBook}
    />
  ));

  return (
    <div className="border border-slate-500 mb-6 p-4 flex gap-6 flex-wrap">
      {renderedList}
    </div>
  );
}
