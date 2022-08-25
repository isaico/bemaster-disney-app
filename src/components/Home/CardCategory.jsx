import React from 'react';
import './home.css';
export const CardCategory = ({ imgSrc, alt }) => {
    return <img className="card__category" alt={alt} src={imgSrc} />;
};
