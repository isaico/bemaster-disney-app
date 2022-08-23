import React from 'react';
import { ItemFooter } from '../contentDetailsFooter/ItemFooter';

export const ItemDetail = ({ item }) => {
    
    return (
        <div>
            <div className="">
                <img src={item.heroImg} alt={item.altHeroImg} />
                <div>
                    <div className="">{item.title}</div>
                    <div>
                        <button>VER AHORA</button>
                        {item.description}
                    </div>
                </div>
                <ItemFooter item={item} />
        
            </div>
        </div>
    );
};
