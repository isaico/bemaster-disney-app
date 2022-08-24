import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/fireBase.js';
import { authErrors } from './authErrors.js';

export const register = async (
    registerEmail,
    registerPassword,
    handleUser,
    handleInputError
) => {
    try {
        const userResp = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        handleInputError(null);
        const userEmailSigned = userResp.user.email;
        const user = userResp.user;
        if (userEmailSigned) {
            handleUser(user);
            handleInputError('');
        }
    } catch (error) {
        authErrors(
            error.code,
            'auth/user-not-found',
            handleInputError,
            'Usuario no encontrado'
        );

        authErrors(
            error.code,
            'auth/invalid-email',
            handleInputError,
            'Email invalido'
        );
        authErrors(
            error.code,
            'auth/weak-password',
            handleInputError,
            'Contraseña muy debil, minimo 6 caracteres'
        );
        authErrors(
            error.code,
            'auth/too-many-requests',
            handleInputError,
            'Se bloqueo el intento de logeo debido a demasiados intentos fallidos, intenta luego!'
        );
        console.log(error.code);
    }
};

export const login = async (
    loginEmail,
    loginPassword,
    handleUser,
    handleInputError
) => {
    try {
        const userResp = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        handleInputError(null);
        const userEmailSigned = userResp.user.email;
        const user = userResp.user;
        if (userEmailSigned) {
            handleUser(user);
            handleInputError('');
        }
    } catch (error) {
        authErrors(
            error.code,
            'auth/user-not-found',
            handleInputError,
            'Usuario no encontrado'
        );

        authErrors(
            error.code,
            'auth/invalid-email',
            handleInputError,
            'Email invalido'
        );
        authErrors(
            error.code,
            'auth/wrong-password',
            handleInputError,
            'Contraseña incorrecta'
        );
        authErrors(
            error.code,
            'auth/too-many-requests',
            handleInputError,
            'Se bloqueo el intento de logeo debido a demasiados intentos fallidos, intenta luego!'
        );
    }
};

export const logout = async (handleUser) => {
    try {
        await signOut(auth);
        handleUser({});
    } catch (error) {
        console.log('logout fail');
    }
};
