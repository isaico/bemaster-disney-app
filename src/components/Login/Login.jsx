import React from 'react';
import { useState } from 'react';

import { register, login, logout } from '../../helpers/loginFunctions/login.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

export const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const { user, handleUser } = useContext(AuthContext);

    return (
        <div>
            <div>
                <h3> Registrar usuario! </h3>
                <input
                    placeholder="Email..."
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                    placeholder="Password..."
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />

                <button
                    onClick={() => register(registerEmail, registerPassword)}
                >
                    Crear User
                </button>
            </div>

            <div>
                <h3> Logearme </h3>
                <input
                    placeholder="Email..."
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                    placeholder="Password..."
                    onChange={(e) => setLoginPassword(e.target.value)}
                />

                <button
                    onClick={() => login(loginEmail, loginPassword, handleUser)}
                >
                    Login
                </button>
            </div>
            <div>{user.email ? user.email : 'no estas logeado'}</div>
            <button onClick={() => logout(handleUser)}> Deslogear </button>
        </div>
    );
};
