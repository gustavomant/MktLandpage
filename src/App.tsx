/*
import ReactDOM from 'react-dom/client';
import React from 'react';
*/
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'react-toastify/dist/ReactToastify.css';

export default function () {
    return <RouterProvider router={router} />
}