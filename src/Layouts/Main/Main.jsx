import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import '../../Pages/Style.css';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />

        </>
    );
};

export default Main;