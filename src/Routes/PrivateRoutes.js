import React from 'react';
import {Navigate, Route} from 'react-router-dom'
import {isLoginUser, setIsLoginUser} from '../context/contextApi';

export const PrivateRoutes = ({Component, isUser}) => {
    const auth = isUser;
    return  auth ?  <Component/> : <Navigate to="/login" />
}