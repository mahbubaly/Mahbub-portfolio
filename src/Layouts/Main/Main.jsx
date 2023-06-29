import React, { useCallback } from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import '../../Pages/Style.css';
import Footer from '../../Shared/Footer';
import { loadFull } from 'tsparticles';
import ParticlesBg from '../../Particals/ParticlesBg';
import Particles from "react-tsparticles";




const Main = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);




    return (
        <>

            <Navbar />
            <Outlet />
            <Footer />
            <ParticlesBg />



        </>
    );
};

export default Main;