import React from 'react';
import {Navigate, Route} from 'react-router-dom'

export const PrivateRoutes = ({Compoent}) => {
    const auth = false;
    return  auth ?  <Compoent/> : <Navigate to="/login" />
}