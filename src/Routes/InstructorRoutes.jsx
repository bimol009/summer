import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRoutes = ({children}) => {
    const {user,loading} = useAuth()

    const location = useLocation()




    if(loading){
        return (
            <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
          );
    }

    
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default InstructorRoutes;