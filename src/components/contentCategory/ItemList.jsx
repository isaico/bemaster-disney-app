import React from 'react';
import { Item } from './Item.jsx';

export const ItemList = ({ items }) => {
    return items.map((item) => <Item key={item.id} itemProps={item} />);
};
