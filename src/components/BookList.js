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
    <div className="border border-slate-500 p-4 flex flex-col gap-6 m-6 rounded-md mb-40">
      <div>
      <h1 className="text-4xl font-semibold">Reading List</h1>
      </div>
      <div className="flex gap-6 flex-wrap">
      {renderedList}
      </div>
    </div>
  );
}
