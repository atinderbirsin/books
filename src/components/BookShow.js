import { useState } from "react";
// import cover from "../images/cover.jpg";
import BoookEdit from "./BookEdit";

export default function BookShow({ book, handleDeleteBook, handleEditBook }) {
  const [isClicked, setisClicked] = useState(false);

  function handleEditClick() {
    setisClicked(!isClicked);
  }

  function onFormSubmit(id, title) {
    handleEditBook(id, title);
    setisClicked(!isClicked);
  }

  return (
    <div className="border border-green-500 w-48 h-[292px] flex flex-col relative">
      <div className="self-end p-2 hover:cursor-pointer z-10">
        <div onClick={handleEditClick}>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div onClick={() => handleDeleteBook(book.id)}>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>

      <div className="self-center">
        <img className="absolute top-0 left-0 z-0" src={`https://picsum.photos/seed/${book.id}/200/300/`} alt={"cover"} />
      </div>

      <BoookEdit isClicked={isClicked} onSubmit={onFormSubmit} book={book}/>
    </div>
  );
}
