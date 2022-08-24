import React from 'react';


export const FooterDetail = ({ item }) => {
    
    return (
        <>
            <div>
                <div>
                    <p>Duracion:</p>
                    <p>{item.duration}</p>
                </div>
                <div>
                    <p>Fecha de estreno:</p>
                    <p>{item.realeaseDate}</p>
                </div>
                <div>
                    <p>Clasificacion:</p>
                    <p>+{item.clasification}</p>
                </div>
                <div>
                    <p>Genero:</p>
                    <p>{item.movieGenre}</p>
                </div>
            </div>
        </>
    );
};
