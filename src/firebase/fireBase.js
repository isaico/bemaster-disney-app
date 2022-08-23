import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyAiruu27Eh2EscRcTxSAVZzlmPgyeoMruU',
    authDomain: 'disneyapp-182ac.firebaseapp.com',
    projectId: 'disneyapp-182ac',
    storageBucket: 'disneyapp-182ac.appspot.com',
    messagingSenderId: '824546330859',
    appId: '1:824546330859:web:13a0fa3c201e56c34516ae',
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
export const auth=getAuth(app)
