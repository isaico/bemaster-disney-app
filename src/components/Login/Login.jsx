import React from 'react';
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/fireBase.js';

export const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (user) => {
        if (user !== null) {
            console.log(user, 'consolelog del authchangestate');
            console.log(user.email, 'nombre del usuario');
            setUser(user.email);
        }
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user,"REGISTER");
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user,"LOGIN");
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log('logout succes');
        } catch (error) {
            console.log('logout fail');
        }
    };

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

                <button onClick={register}> Crear User</button>
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

                <button onClick={login}> Login</button>
            </div>

            <h4> Usuario logeado: {user?.email}</h4>

            <button onClick={logout}> Deslogear </button>
        </div>
    );
};
