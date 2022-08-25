import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { logout } from '../../helpers/loginFunctions/login.js';
import './navBar.css';
export const NavBar = () => {
    const { user, handleUser } = useContext(AuthContext);

    const userEmail = user.email;
    return (
        <nav className="nav">
            <div className="nav__links">
                <Link to="/home">
                    <BrandLogo />
                </Link>
                <Link className="nav__links--decoration" to="/home">
                    Inicio
                </Link>
                <Link className="nav__links--decoration" to="/movies">
                    Todas
                </Link>
            </div>
            <div className="nav__user">
                <p className="nav__user__email">{userEmail}</p>
                <button className="nav__user__btn" onClick={() => logout(handleUser)}> Cerrar sesión </button>
            </div>
        </nav>
    );
};
