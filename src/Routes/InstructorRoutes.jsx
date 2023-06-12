import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructor from './../hooks/useInstructor';

const InstructorRoutes = ({children}) => {
    const {user,loading} = useAuth();
    const [isInstructor,isLoading] = useInstructor();

    const location = useLocation();

   


    if(loading || isLoading){
        return (
            <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
          );
    }

    
    if(user && isInstructor){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default InstructorRoutes;