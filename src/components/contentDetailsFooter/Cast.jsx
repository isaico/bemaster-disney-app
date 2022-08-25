import React from 'react';

export const Cast = ({ item }) => {
    return (
        <>
            <ol className="footer__cast">
                
                {item.cast.map((i) => (
                    <li className="footer__cast__member" key={i}>{i}</li>
                ))}
            </ol>
        </>
    );
};
