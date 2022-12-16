import { useState } from "react";

export default function BookCreate({ handleCreateBook }) {
    const [name, setName] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        handleCreateBook(name);
    }

    return (
        <form className="border border-gray-400 rounded-md p-4" onSubmit={onFormSubmit}>
            <h2 className="text-3xl mb-3">Add book</h2>
            <label htmlFor="title">Title</label>
            <input 
             className="border-slate-500 border-2 block rounded-md w-6/12 p-1"
             id="title"
             onChange={(e) =>setName(e.target.value)}
            />
        </form>
    )
};