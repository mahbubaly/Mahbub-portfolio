import React from 'react';

import img from '../../assets/Images/mahbub/mahbub-pro-pic.jpg'
import resume from '../../assets/Images/mahbub/Resume of Mahbub.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import About from './AboutMe/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../Contact/Contact';
import Hired from '../Hired/Hired';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { Fa500Px, FaFacebook, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
// ..
AOS.init();



const Home = () => {
    const [text] = useTypewriter({
        words: ['I am frontend Developer Also', 'I am junior MERN Stack  web developer', 'I plan, strategise, manage and execute large-scale projects.', 'I write code and develop project', 'I can help your product get users and a product-market fit.',],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80
    })
    return (
        <>
            <div id='/' className='container mx-auto grid lg:grid-cols-2 grid-cols-1 justify-center p-6 gap-8 items-center pt-10'>
                <div data-aos="zoom-in-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">

                    <div className='space-y-4 text-yellow-600 lg:mt-0 mt-12'>
                        <h1 className='text-2xl font-bold' >Hi 👋, </h1>
                        <h1 className='text-2xl font-bold'>I'm Mahbub <br />

                            <span className='text-yellow-600 my-2' >  {text}</span>
                            <span style={{ color: '#CA8A04' }}>
                                <Cursor cursorStyle="!" />
                            </span>

                        </h1>


                        <div className='gap-6 flex'>
                            <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>    <button className='btn btn-outline text-white hover:bg-white hover:text-yellow-600 bg-yellow-600 border-dashed '>Get In touch</button></Link>


                            <button className='btn btn-outline  hover:border-none text-white hover:bg-yellow-700 duration-700 '><a href={resume} download>Download Resume</a>
                            </button>

                        </div>
                    </div>
                </div>

                <div>
                    <div data-aos="zoom-in-left"

                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className='grid grid-cols-12 gap-6 justify-center items-center'>
                        <div className='col-span-8'>
                            <abbr title="I am Mahbub , Current age 21!!">

                                <img
                                    className=' lg:ml-[20%] w-[400px] mt-20 shadow-2xl shadow-yellow-500 
                                    hover:shadow-red-400  box-border h-[400px] justify-center rounded-[50%]' src={img} alt="This is mahbub " />
                            </abbr>
                        </div>


                        <div className='text-white  col-span-4 ml-10 lg:ml-20 gap-5 flex flex-col'>

                            <a className='hover:underline' href="https://github.com/mahbubaly">
                                <div className='hover:shadow-2xl items-center hover:shadow-black flex'>
                                    <h1 className='inline'>GitHub  </h1>
                                    <FaGithub className='w-20 h-8' />
                                </div>
                            </a>

                            <a className='hover:underline' href="https://www.linkedin.com/in/mahbubur-rahman-2a3a7b248/">
                                <div className='hover:shadow-2xl items-center hover:shadow-black flex'>
                                    <h1 className='inline'>LinkedIn</h1>
                                    <FaLinkedin className='w-20 h-8' />
                                </div>
                            </a>

                            <a className='hover:underline' href="https://www.facebook.com/mahbubali72">
                                <div className='hover:shadow-2xl gap-2 items-center hover:shadow-black flex'>
                                    <h1 className='inline'>Facebook</h1>
                                    <FaFacebook className='w-20 h-8' />
                                </div>
                            </a>


                        </div>
                    </div>






                </div>
            </div>


            <About />
            <Skills />

            <Projects />
            <Contact />
            <Hired />
        </>
    );
};

export default Home;