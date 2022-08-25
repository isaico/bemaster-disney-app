import React from 'react';
import { Link } from 'react-router-dom';
import { CardCategory } from './CardCategory.jsx';
import { NavBar } from '../navBar/NavBar.jsx';
import './home.css';

export const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="home__category__container">
                <Link to="/home/disney" >
                    <CardCategory
                        alt="logo of disney"
                        imgSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png"
                    />
                </Link>
                <Link to="/home/pixar" >
                    <CardCategory
                        alt="logo of pixar"
                        imgSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=400&aspectRatio=1.78&format=png"
                    />
                </Link>
                <Link to="/home/marvel" >
                    <CardCategory
                        alt="logo of MARVEL"
                        imgSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=400&aspectRatio=1.78&format=png"
                    />
                </Link>
                <Link to="/home/starwars" >
                    <CardCategory
                        alt="logo of STAR WARS"
                        imgSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png"
                    />
                </Link>
                <Link to="/home/natgeo" >
                    <CardCategory
                        alt="logo of NAT GEO"
                        imgSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=400&aspectRatio=1.78&format=png"
                    />
                </Link>
            </div>
        </div>
    );
};
