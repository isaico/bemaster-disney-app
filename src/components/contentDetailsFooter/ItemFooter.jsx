import React from 'react';
import { useState } from 'react';
import { Cast } from './Cast.jsx';
import { FooterDetail } from './FooterDetail.jsx';

import './detailFooter.css';

export const ItemFooter = ({ item }) => {
    const [footerOptions, setFooterOptions] = useState('elenco');

    const onFooterOptions = (option) => {
        setFooterOptions(option);
    };

    return (
        <>
            <nav className="footer__nav">
                <button
                    className="footer__nav__btn"
                    onClick={() => onFooterOptions('elenco')}
                >
                    ELENCO
                </button>
                <button
                    className="footer__nav__btn"
                    onClick={() => onFooterOptions('detalles')}
                >
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
