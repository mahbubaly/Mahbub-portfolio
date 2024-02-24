import React from 'react';
import img2 from '../../assets/Images/mahbub/mine.jpg'
import img3 from '../../assets/Images/mahbub/My 1.png'
import resume from '../../assets/Images/mahbub/Resume of Mahbub.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import About from './AboutMe/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../Contact/Contact';
import Hired from '../Hired/Hired';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { Helmet } from 'react-helmet-async';


// ..
AOS.init();



const Home = () => {

    return (
        <>

            <Helmet>
                <title> Mahbubu portfolio || home</title>
            </Helmet>







            <Skills />

            <Projects />
            <Contact />
            <About />
            <Hired />



        </>
    );
};

export default Home;