import React from 'react';
import { imgSources } from '../../helpers/imgSources.js';

export const CategoryHeader = ({ category }) => {
    const getHeaderSource = () => {
        return imgSources.find((index) => index.name === category);
    };
    const source = getHeaderSource();
    return (
        <img
            className="category__header"
            alt={source.alt}
            src={source.imgSrc}
        />
    );
};
