import { useContext, useState } from "react";
import BooksContext from "../context/books";

export default function BoookEdit({ isClicked, onSubmit, book }) {
  const [title, setTitle] = useState(book.title);
  const { counter, incrementCounter } = useContext(BooksContext);

  function onFormSubmit(event) {
    event.preventDefault();
    incrementCounter();
    onSubmit(book.id, title);
  }

  return (
    <div className="self-center z-10 mt-44">
      <div className={`font-extrabold uppercase bg-white rounded-sm p-1 ${isClicked ? "hidden" : ""}`}>
        {book.title} {counter}
      </div>
      <form className={`${isClicked ? "" : "hidden"}`} onSubmit={onFormSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          autoFocus={true}
          className='p-1 text-bold'
          value={title}
        />
      </form>
    </div>
  );
}
