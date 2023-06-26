import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Images/mahbub/mahbub-pro-pic.jpg'
import resume from '../../assets/Images/mahbub/Resume of Mahbub.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'



const Home = () => {
    const [text] = useTypewriter({
        words: ['I am junior MERN Stack  web developer', 'I plan, strategise, manage and execute large-scale projects.', 'I write code and develop project', 'I can help your product get users and a product-market fit.',],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80
    })
    return (
        <>
            <div className='grid grid-cols-2 justify-center p-6 gap-8 items-center mt-10'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold' >Hi 👋, </h1>
                    <h1 className='text-2xl font-bold'>I'm Mahbub <br />

                        <span className='text-yellow-600 space-y-3' >  {text}</span>
                        <span style={{ color: '#CA8A04' }}>
                            <Cursor cursorStyle="!" />
                        </span>

                    </h1>


                    <div className='gap-6 flex'>
                        <button className='btn btn-outline text-white hover:bg-white hover:text-yellow-600 bg-yellow-600 border-dashed '>Get In touch</button>


                        <button className='btn btn-outline hover:border-none hover:bg-yellow-700 duration-1000 '><a href={resume} download>Download Resume</a></button>

                    </div>
                </div>
                <img className='w-[400px] h-[400px] justify-center rounded-[50%]' src={img} alt="" />
            </div>
        </>
    );
};

export default Home;