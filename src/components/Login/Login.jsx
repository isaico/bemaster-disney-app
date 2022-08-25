import React from 'react';
import { useState } from 'react';
import { register, login } from '../../helpers/loginFunctions/login.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { Link } from 'react-router-dom';
import './login.css';

export const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [activateRegister, setActivateRegister] = useState(false);
    const { user, handleUser, inputError, handleInputError } =
        useContext(AuthContext);

    return (
        <div className="login__container">
            <div className="login__background"></div>
            <div className="login__title__container">
                <img
                    className="login__logo"
                    src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                    alt="Disney logo"
                />
                <h2 className="login__text">Inicia sesión con tu correo </h2>
            </div>
            {!activateRegister ? (
                <div className="login__input__container">
                    <input
                        placeholder="Correo electronico."
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="login__input"
                    />
                    <input
                        placeholder="Password..."
                        type="password"
                        className="login__input"
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />

                    <div className="login__btn__container">
                        <button
                            className="login__btn login__btn--main"
                            onClick={() =>
                                login(
                                    loginEmail,
                                    loginPassword,
                                    handleUser,
                                    handleInputError
                                )
                            }
                        >
                            INICIAR SESION
                        </button>
                        <button
                            className="login__btn"
                            onClick={() => setActivateRegister(true)}
                        >
                            REGISTRAR
                        </button>
                    </div>
                </div>
            ) : (
                <div className="login__input__container">
                    <h3 className="login__text"> Registrar tu usuario! </h3>
                    <input
                        className="login__input"
                        type="email"
                        placeholder="Email..."
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                    <input
                        className="login__input"
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />

                    <div className="login__btn__container">
                        <button
                            className="login__btn login__btn--main"
                            onClick={() =>
                                register(
                                    registerEmail,
                                    registerPassword,
                                    handleUser,
                                    handleInputError
                                )
                            }
                        >
                            Crear Usuario
                        </button>
                        <button
                            className="login__btn "
                            onClick={() => setActivateRegister(false)}
                        >
                            Logear
                        </button>
                    </div>
                </div>
            )}
            {inputError ? <h3 className="login__auth__error">{inputError}</h3> : <></>}
            <>
                {user.email ? (
                    <div className="login__auth">
                        <h4 className="login__auth__msg">
                            Bienvenido usuario: {user.email}
                        </h4>
                        <Link to="/home" className="login__auth__link">
                            VER CONTENIDO
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h3 className="login__text">No estas logeado! </h3>
                        <h3 className="login__text">
                            {' '}
                            Para ver el contenido logeate por favor!
                        </h3>
                    </div>
                )}
            </>
            {/* <button onClick={() => logout(handleUser)}> Deslogear </button> */}
        </div>
    );
};
