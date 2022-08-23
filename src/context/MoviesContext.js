import { createContext, useState, useContext } from 'react';

const MoviesContext = createContext([]);

export const ActivateMoviesContext = () => useContext(MoviesContext);

function MoviesContextProvider({ childen }) {
    const [itemsList, setItemsList] = useState([]);

    // const embedItemList = (items)=>{
    //     setItemsList([...itemsList,items])
    // }
    const addItem = (item) => {
        if (item) {
            setItemsList([...itemsList, item]);
        }
    };
    return (
        <MoviesContext.Provider value={{ itemsList, setItemsList, addItem }}>
            {childen}
        </MoviesContext.Provider>
    );
}
export default MoviesContextProvider;
