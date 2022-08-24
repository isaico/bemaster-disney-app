import React from 'react';
import { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase/fireBase.js';
import { ItemList } from '../contentCategory/ItemList';
import { NavBar } from '../navBar/NavBar.jsx';
import {Loader} from '../Loader/Loader.jsx'
export const AllMovies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('movies');
        itemCollection
            .get()
            .then((data) => {
                if (data.size === 0) console.log('no se encontraron los datos');
                setItems(
                    data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div>
            <NavBar />
            {loading ? <Loader /> : <ItemList items={items} />}
        </div>
    )
};
