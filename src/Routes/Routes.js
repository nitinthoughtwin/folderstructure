import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,

} from "react-router-dom";
import { Login, Home, Dashboard, Signup } from '../screens';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes'

export const RoutesLink = () => {

    const publicRouteList = [
        { path: '/login', component: Login },
        { path: '/signup', component: Signup },
        { path: '/', component: Home }
    ];
    const privateRouteList = [
        { path: '/dashboard', component: Dashboard }
    ];

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                        publicRouteList.map((item) => {
                            return <Route exact path={item.path} element={<PublicRoutes Component={item.component} />} />
                        })
                    }
                    {
                        privateRouteList.map((item)=>{
                            return <Route exact path={item.path} element={<PrivateRoutes Component={item.component}/>} />
                        })
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}