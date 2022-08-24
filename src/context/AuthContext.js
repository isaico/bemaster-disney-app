import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const handleUser = (User) => {
        console.log(User,"handleUser del context")
        setUser(User);
    };
    return (
        <AuthContext.Provider value={{ user,handleUser }}>{children}</AuthContext.Provider>
    );
};
