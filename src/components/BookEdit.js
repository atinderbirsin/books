import { useContext, useState } from "react";
import BooksContext from "../context/books";

export default function BoookEdit({ isClicked, onSubmit, book }) {
  const [title, setTitle] = useState(book.title);
  const { updateBook } = useContext(BooksContext);

  function onFormSubmit(event) {
    event.preventDefault();
    updateBook(book.id, title);
    onSubmit();
  }

  return (
    <div className="self-center z-10 mt-44">
      <div className={`font-extrabold uppercase bg-white rounded-sm p-1 ${isClicked ? "hidden" : ""}`}>
        {book.title}
      </div>
      <form className={`${isClicked ? "" : "hidden"}`}  onSubmit={onFormSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className='p-1 text-bold'
          value={title}
        />
      </form>
    </div>
  );
}
