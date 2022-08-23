import React from 'react';
import { Link } from 'react-router-dom';
import { CardCategory } from './CardCategory.jsx';

export const Home = () => {
    return (
        <div className="homeContainer">
            <Link to="/home/disney" className="">
                <CardCategory
                    alt="logo of disney"
                    imgSrc="http://placekitten.com/g/200/300"
                    title="DISNEY"
                />
            </Link>
            <Link to="/home/pixar" className="">
                <CardCategory
                    alt="logo of pixar"
                    imgSrc="http://placekitten.com/g/200/300"
                    title="PIXAR"
                />
            </Link>
            <Link to="/home/marvel" className="">
                <CardCategory
                    alt="logo of MARVEL"
                    imgSrc="http://placekitten.com/g/200/300"
                    title="MARVEL"
                />
            </Link>
            <Link to="/home/starwars" className="">
                <CardCategory
                    alt="logo of STAR WARS"
                    imgSrc="http://placekitten.com/g/200/300"
                    title="STAR WARS"
                />
            </Link>
            <Link to="/home/natgeo" className="">
                <CardCategory
                    alt="logo of NAT GEO"
                    imgSrc="http://placekitten.com/g/200/300"
                    title="NATIONAL GEOGRAPHIC"
                />
            </Link>
        </div>
    );
};
