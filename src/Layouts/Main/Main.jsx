import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import '../../Pages/Style.css';
import Footer from '../../Shared/Footer';
import { loadFull } from 'tsparticles';









const Main = () => {
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#32A18F");


    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
            setLoading(false);

        }, 3000)
    }, [])

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

            <div className='full-back contain'>
                <Navbar />
                <Outlet />
                <Footer />
            
            </div>

        </>

    );
};

export default Main;