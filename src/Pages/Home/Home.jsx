import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Images/mahbub/mahbub-pro-pic.jpg'
import resume from '../../assets/Images/mahbub/Resume of Mahbub.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import About from './AboutMe/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
            <div className='grid lg:grid-cols-2 grid-cols-1 justify-center p-6 gap-8 items-center mt-10'>
                <div data-aos="zoom-in-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">

                    <div className='space-y-4 text-yellow-600'>
                        <h1 className='text-2xl font-bold' >Hi 👋, </h1>
                        <h1 className='text-2xl font-bold'>I'm Mahbub <br />

                            <span className='text-yellow-600 my-2' >  {text}</span>
                            <span style={{ color: '#CA8A04' }}>
                                <Cursor cursorStyle="!" />
                            </span>

                        </h1>


                        <div className='gap-6 flex'>
                            <Link to='/contact'>    <button className='btn btn-outline text-white hover:bg-white hover:text-yellow-600 bg-yellow-600 border-dashed '>Get In touch</button></Link>


                            <button className='btn btn-outline  hover:border-none text-white hover:bg-yellow-700 duration-700 '><a href={resume} download>Download Resume</a>
                            </button>

                        </div>
                    </div>
                </div>

                <div>
                    <abbr title="I am Mahbub , Current age 21!!">

                        <img data-aos="zoom-in-left"

                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            className=' lg:ml-[25%] w-[400px] hover:shadow-2xl hover:shadow-red-400 h-[400px] justify-center rounded-[50%]' src={img} alt="This is mahbub " />
                    </abbr>

                </div>
            </div>


            <About />
        </>
    );
};

export default Home;