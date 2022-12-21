import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BoookEdit from "./BookEdit";

export default function BookShow({ book }) {
  const [isClicked, setisClicked] = useState(false);
  const { deleteBook } = useBooksContext();

  function handleEditClick() {
    setisClicked(!isClicked);
  }

  function handleBookEdit() {
    setisClicked(!isClicked);
  }

  return (
    <div className="border border-green-500 w-48 max-h-[292px] flex flex-col relative">
      <div className="self-end p-2 hover:cursor-pointer z-10 bg-white rounded-bl-sm">
        <div onClick={handleEditClick}>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div onClick={() => deleteBook(book.id)}>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>

      <div className="self-center">
        <img className="absolute top-0 left-0 z-0" src={`https://picsum.photos/seed/${book.id}/200/288/`} alt={"cover"} />
      </div>

      <BoookEdit isClicked={isClicked} onSubmit={handleBookEdit} book={book}/>
    </div>
  );
}
