import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [inputError, setInputError] = useState("");

    const handleUser = (User) => {
        setUser(User);
    };
    const handleInputError = (error) => {
        setInputError(error);
    };
    return (
        <AuthContext.Provider
            value={{ user, handleUser, inputError, handleInputError }}
        >
            {children}
        </AuthContext.Provider>
    );
};
