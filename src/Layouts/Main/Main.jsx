import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import '../../Pages/Style.css';
import Footer from '../../Shared/Footer';
;


const Main = () => {




    return (
        <>

            <Navbar />
            <Outlet />
            <Footer />
            

        </>
    );
};

export default Main;