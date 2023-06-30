import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import '../../Pages/Style.css';
import Footer from '../../Shared/Footer';
import { loadFull } from 'tsparticles';
import ParticlesBg from '../../Particals/ParticlesBg';
import Particles from "react-tsparticles";
import { PuffLoader} from 'react-spinners';








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

            {
                loading ?
                    <>
                        <div className='flex justify-center items-center h-[800px] '>
                            <div>

                                <PuffLoader


                                    
                                    color={color}
                                    loading={loading}




                                />
                                <h1 className='text-[#32A18F] text-xl'>Loading.......</h1>
                            </div>
                        </div>

                    </>

                    : <>
                        <div className='full-back'>
                            <Navbar />
                            <Outlet />
                            <Footer />
                            <ParticlesBg />
                        </div>

                    </>
            }



        </>
    );
};

export default Main;