import React from 'react';
import { useState } from 'react';
import { register, login} from '../../helpers/loginFunctions/login.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [activateRegister, setActivateRegister] = useState(false);
    const { user, handleUser, inputError, handleInputError } =
        useContext(AuthContext);

    return (
        <div>
            {!activateRegister ? (
                <div>
                    <h3>Inicia sesión con tu correo </h3>
                    <input
                        placeholder="Correo electronico."
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password..."
                        type="password"
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />

                    <button
                        onClick={() =>
                            login(
                                loginEmail,
                                loginPassword,
                                handleUser,
                                handleInputError
                            )
                        }
                    >
                        Login
                    </button>
                    <button onClick={() => setActivateRegister(true)}>
                        Registrarme
                    </button>
                </div>
            ) : (
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
                    <button onClick={() => setActivateRegister(false)}>
                        Logear
                    </button>
                </div>
            )}
            {inputError ? <p>{inputError}</p> : <></>}
            <div>
                {user.email ? (
                    <div>
                        <h4>Hola: {user.email}</h4>
                        <Link to="/home"> ver peliculas</Link>
                    </div>
                ) : (
                    <div>
                        <h4>No estas logeado! </h4>
                        <h4>Para ver el contenido logeate por favor!</h4>
                    </div>
                )}
            </div>
            {/* <button onClick={() => logout(handleUser)}> Deslogear </button> */}
        </div>
    );
};
