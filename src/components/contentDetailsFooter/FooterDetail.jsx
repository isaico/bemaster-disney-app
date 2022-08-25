import React from 'react';

export const FooterDetail = ({ item }) => {
    return (
        <>
            <div className="footer__detail">
                <div className="footer__detail__left">
                    <div>
                        <h4>Duracion:</h4>
                        <p>{item.duration}</p>
                    </div>
                    <div>
                        <h4>Fecha de estreno:</h4>
                        <p>{item.realeaseDate}</p>
                    </div>
                    <div>
                        <h4>Clasificacion:</h4>
                        <p>
                            <span className="pegi">{item.clasification}+</span>
                        </p>
                    </div>
                    <div>
                        <h4>Genero:</h4>
                        <p>{item.movieGenre}</p>
                    </div>
                </div>
                <div className="footer__detail__right">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    );
};
