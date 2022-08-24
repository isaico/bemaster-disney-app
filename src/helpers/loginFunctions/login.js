import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/fireBase.js';

export const register = async (registerEmail, registerPassword) => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        console.log(user, 'REGISTER');
    } catch (error) {
        console.log(error.message);
    }
};

export const login = async (loginEmail, loginPassword, handleUser) => {
    try {
        const userResp = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        const userEmailSigned = userResp.user.email;
        const user = userResp.user;
        console.log(user);
        if (userEmailSigned) {
            handleUser(user);
        }
        console.log(user, 'LOGIN');
    } catch (error) {
        console.log(error.message);
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
