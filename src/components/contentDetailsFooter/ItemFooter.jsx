import React from 'react';
import { useState } from 'react';
import { Cast } from './Cast.jsx';
import { FooterDetail } from './FooterDetail.jsx';


export const ItemFooter = ({ item }) => {
    const [footerOptions, setFooterOptions] = useState('elenco');
    const onFooterOptions = (option) => {
        setFooterOptions(option);
    };
    return (
        <>
            <nav>
                <button onClick={() => onFooterOptions('elenco')}>
                    ELENCO
                </button>
                <button onClick={() => onFooterOptions('detalles')}>
                    DETALLES
                </button>
            </nav>

            {footerOptions === 'elenco' ? (
                <Cast item={item} />
            ) : (
                <FooterDetail item={item} />
            )}
        </>
    );
};
