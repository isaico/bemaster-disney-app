import React from 'react';

export const Cast = ({ item }) => {
    return (
        <>
            <ol>
                elenco:
                {item.cast.map((i) => (
                    <div key={i}>
                        <li>{i}</li>
                    </div>
                ))}
            </ol>
        </>
    );
};
