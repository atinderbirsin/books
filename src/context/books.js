import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [counter, setCounter] = useState(0);

    const valueToShare = {
        counter,
        incrementCounter: () => {
            setCounter(counter + 1);
        }
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;