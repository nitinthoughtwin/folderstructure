import React, { useContext } from 'react';
import { Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/contextApi';


export const NavArea = () => {
    const navigate = useNavigate();
    const {isLoginUser,setIsLoginUser} = useContext(userContext);

    const navigateTo = (location) =>{
        navigate(location)
    }
    console.log(isLoginUser)
    return <>
        <Tabs aria-label="nav tabs example">          
            <button onClick={()=>setIsLoginUser(!isLoginUser)}>{isLoginUser ?'Logout' : 'Login'}</button>
            <Tab label="Home" onClick={() => navigateTo('/')} />
            <Tab label="Login" onClick={() => navigateTo('/login')} />
            <Tab label="Signup" onClick={() => navigateTo('/signup')} />
            <Tab label="About" onClick={() => navigateTo('/about')} />
            <Tab label="Dashboard" onClick={() => navigateTo('/dashboard')} />
        </Tabs>
    </>
}