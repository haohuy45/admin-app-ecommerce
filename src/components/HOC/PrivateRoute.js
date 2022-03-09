import React, { Component } from "react";
import { Route, useNavigate, Outlet, Navigate } from 'react-router-dom';




const PrivateRoute = () => {

        const token = window.localStorage.getItem('token');

    return token ? <Outlet/> : <Navigate to='/signin' replace/>
    // return <Component {...rest} component={(props) => {
    //     const token = window.localStorage.getItem('token');
    //     if (token) {
    //         return <Component {...props} />
    //     } else {
    //         return <Navigate to={`/signin`} />
    //     }
    // }} />
}

export default PrivateRoute;