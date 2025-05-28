import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    
    if (loading) {
        return <Loading />;
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate to='/login' />;
};

export default PrivateRoute;