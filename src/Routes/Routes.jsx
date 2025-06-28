import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import MainPage from '../Pages/MainPage/MainPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
    },
]);

export default router;