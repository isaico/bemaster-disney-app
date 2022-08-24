import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { logout } from '../../helpers/loginFunctions/login.js';

export const NavBar = () => {
    const { user, handleUser } = useContext(AuthContext);

    const userEmail = user.email;
    return (
        <nav>
            <Link to="/home">
                <BrandLogo />
            </Link>
            <Link to="/home">
                Inicio
            </Link>
            <Link to='/movies'>
                Todas
            </Link>
            <div>{userEmail}</div>
            <button onClick={() => logout(handleUser)}> Deslogear </button>
        </nav>
    );
};
