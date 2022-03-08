import React, { useContext } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,

} from "react-router-dom";
import { Login, Home, Dashboard, Signup, About } from '../screens';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes'
import userContext from '../context/contextApi';

export const RoutesLink = () => {

    const { isLoginUser } = useContext(userContext);
    
    const publicRouteList = [
        { path: '/login', component: Login },
        { path: '/signup', component: Signup },
        { path: '/about', component: About },
        { path: '/', component: Home }
    ];
    const privateRouteList = [
        { path: '/dashboard', component: Dashboard }
    ];


    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* {
                        paths.map(item => <Route exact path={item.path} element={<item.Component/>}  /> )
                    } */}

                    {
                        publicRouteList.map((item) => {
                            return <Route exact path={item.path} element={<item.component/>} />
                        })
                    }
                    {
                        privateRouteList.map((item)=>{
                            return <Route exact path={item.path} element={<PrivateRoutes isUser={isLoginUser} Component={item.component}/>} />
                        })
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}