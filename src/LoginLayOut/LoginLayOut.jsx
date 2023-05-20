import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/LoginRegister/Login';

const LoginLayOut = () => {
    return (
        <>
            <Header></Header>
            <Outlet>
                <Login></Login>
            </Outlet>
        </>
    );
};

export default LoginLayOut;