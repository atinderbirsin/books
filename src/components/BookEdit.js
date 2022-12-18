import { useState } from "react";

export default function BoookEdit({ isClicked, onSubmit, book }) {
  const [title, setTitle] = useState(book.title);

  function onFormSubmit(event) {
    event.preventDefault();
    onSubmit(book.id, title);
  }

  return (
    <div className="self-center z-10 mt-44">
      <div className={`font-extrabold uppercase bg-white rounded-sm p-1 ${isClicked ? "hidden" : ""}`}>
        {book.title}
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
