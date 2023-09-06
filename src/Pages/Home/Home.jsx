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
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/Tb';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import Container from '../../Shared/Container';
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

            <Helmet>
                <title> Mahbubu portfolio || home</title>
            </Helmet>

            <Container>


                <div className=''>
                    <div id='/' className=' mx-auto grid lg:grid-cols-2 grid-cols-1 justify-center p-6 gap-8 items-center pt-10'>
                        <div className='' data-aos="fade-up"
                            data-aos-duration="3000"

                            data-aos-delay="50">

                            <div className='space-y-4 text-white lg:z-0 z-30 lg:mt-0 mt-12'>
                                <h1 className='text-2xl font-bold ' >Hi 👋, </h1>
                                <h1 className='text-2xl font-bold'>I'm Mahbub <br />

                                    <span className='text-white my-2' >  {text}</span>
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
                            <div data-aos="fade-up"
                                data-aos-duration="3000"

                                data-aos-delay="50" className='lg:grid grid-cols-12 gap-6 justify-center items-center'>
                                <div className='col-span-8 flex justify-center md:justify-start lg:justify-center'>
                                    <abbr title="I am Mahbub , Current age 21!!">

                                        <img
                                            className=' lg:ml-[20%] w-[400px] mt-20 shadow-2xl shadow-white 
                                     box-border h-[400px] justify-center rounded-[50%] '  src={img3} alt="This is mahbub " />
                                    </abbr>
                                </div>


                              
                            </div>






                        </div>
                    </div>


                    <About />
                    <Skills />

                    <Projects />
                    <Contact />
                    <Hired />
                </div>
            </Container>

        </>
    );
};

export default Home;