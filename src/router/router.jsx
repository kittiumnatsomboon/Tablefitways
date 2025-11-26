import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";
import Navbar from '../Component/Navbar';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Aboute from '../pages/Aboute';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            { index: true, element: <Home/> },
            { path:"/Contact", element: <Contact/> },
            { path:"/Aboute", element: <Aboute/> },
            { path:"/Register", element: <Register/> },
            { path:"/Login", element: <Login/> },
        ],

    },
]);

export default router;