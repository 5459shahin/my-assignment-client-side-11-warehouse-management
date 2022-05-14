import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import PLeaseVerify from '../PleaseVerify/PLeaseVerify';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading />;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>;
    }
    if (!user?.emailVerified) {
        return <PLeaseVerify></PLeaseVerify>;
    } 
    return children;
}

export default RequireAuth;