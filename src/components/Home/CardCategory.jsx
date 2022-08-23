import React from 'react';

export const CardCategory = ({ title, imgSrc, alt }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img alt={alt} src={imgSrc} />
        </div>
    );
};
