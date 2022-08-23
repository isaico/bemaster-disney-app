import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/fireBase.js';
import { ItemList } from './ItemList.jsx';
// import { ActivateMoviesContext } from '../../context/MoviesContext.js';

export const ContentCategory = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { urlCategory } = useParams();
    // const { setItemsList, addItem, itemsList } = ActivateMoviesContext();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('movies');

        if (urlCategory) {
            const itemCollCategoria = itemCollection.where(
                'category',
                '==',
                urlCategory
            );
            itemCollCategoria
                .get()
                .then((data) => {
                    if (data.size === 0)
                        console.log('no se encontraron los datos');
                    setItems(
                        data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    // setItemsList(
                    //     data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    // );
                })

                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        } else {
            const itemCollection = db.collection('movies');
            itemCollection
                .get()
                .then((data) => {
                    if (data.size === 0)
                        console.log('no se encontraron los datos');
                    setItems(
                        data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    // setItemsList(
                    //     data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    // );
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }
    }, [urlCategory]);

    return (
        <div id="itemList">
             "lista de items del context"
            {loading ? 'Cargando...' : <ItemList items={items} />}
        </div>
    );
};
