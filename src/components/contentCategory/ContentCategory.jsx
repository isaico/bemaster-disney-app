import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/fireBase.js';
import { NavBar } from '../navBar/NavBar.jsx';
import { ItemList } from './ItemList.jsx';
import { Loader } from '../Loader/Loader.jsx';
import { CategoryHeader } from './CategoryHeader.jsx';
import './category.css';
export const ContentCategory = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { urlCategory } = useParams();

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
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }
    }, [urlCategory]);

    return (
        <div className="category">
            <NavBar />
            {loading ? (
                <Loader />
            ) : (
                <div className="category__main">
                    <CategoryHeader category={urlCategory} />
                    <div className="category__list">
                        <ItemList items={items} urlCategory={urlCategory} />
                    </div>
                </div>
            )}
        </div>
    );
};
