import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const PrivateRoute = ( {path,element}) => {
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    if (user) {
        return <Route path={path} element={element}/>;
    } else {
        return <Navigate to="/" />;
    }
};
