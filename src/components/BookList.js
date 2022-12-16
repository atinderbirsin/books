import BookShow from "./BookShow"

export default function BookList({ books }) {
    const renderedList = books.map(book => <BookShow key={book.id} title={book.title} />)

    return (
        <div className="border border-slate-500 mb-6 p-4 flex gap-6 flex-wrap">
            {renderedList}
        </div>
    )
};