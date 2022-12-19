import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col">
      <BookList />
      <BookCreate />
    </div>
  );
}
