import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";
import Navbar from '../Component/Navbar';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            { index: true, element: <Home/> },
        ],
    },
]);

export default router;