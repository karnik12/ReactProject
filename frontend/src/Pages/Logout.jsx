import React, { useEffect } from 'react'
import { useAuth } from '../Store/auth';
import {  Navigate } from 'react-router-dom';

const Logout = () => {

    const {LogoutUser}= useAuth();
    // const navigate = useNavigate();

    useEffect(()=>{
        LogoutUser();
    },[LogoutUser])
  return <Navigate to="/login" />

}

export default Logout
