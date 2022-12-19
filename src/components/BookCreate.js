import { useState } from "react";

export default function BookCreate({ handleCreateBook }) {
    const [title, setTitle] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        handleCreateBook({ title });
        setTitle('');
    }

    return (
        <form className="border p-4 fixed bottom-0 w-screen bg-green-400 z-20" onSubmit={onFormSubmit}>
            <h2 className="text-3xl mb-3">Add a book</h2>
            <label htmlFor="title">Title</label>
            <input 
             className="border-slate-500 border-2 block rounded-md w-6/12 p-1"
             id="title"
             onChange={(e) =>setTitle(e.target.value)}
             value={title}
            />
        </form>
    )
};