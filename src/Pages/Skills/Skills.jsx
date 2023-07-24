import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import '../../Pages/Style.css';
import { Helmet } from 'react-helmet-async';
import html from '../../assets/Images/Skills/html.png'
import css from '../../assets/Images/Skills/css.png'
import java from '../../assets/Images/Skills/Javascript.png'
import react from '../../assets/Images/Skills/React.png'
import tailwind from '../../assets/Images/Skills/Tailwind.png'
import bootstrap from '../../assets/Images/Skills/Bootrap.png'
import firebase from '../../assets/Images/Skills/Firebase.png'
import sass from '../../assets/Images/Skills/sass.png'
import gitHub from '../../assets/Images/Skills/Github.png'
import express from '../../assets/Images/Skills/Express.png'
import node from '../../assets/Images/Skills/node-js-svgrepo-com.svg'
import mongodb from '../../assets/Images/Skills/mongodb.png'
import nextJs from '../../assets/Images/Skills/nextjs.png'
import C from '../../assets/Images/Skills/Clogo.png'
import cc from '../../assets/Images/Skills/C++_Logo.png'
import python from '../../assets/Images/Skills/Python-logo.png'




const Skills = () => {
    return (
        <>
            <Helmet>
                <title> Mahbubu portfolio | Skills</title>
            </Helmet>


            <div className="lg:mb-2 max-w-screen-2xl mx-auto" id='skill'>
                <div className="py-10 text-center uppercase ">
                    <a className="font-bold lg:text-2xl pb-2 text-white border-b-4 rounded border-b-yellow-600"> My <span className='text-yellow-500 '>Skills</span></a>
                </div>
                <div className="grid md:grid-cols-2   grid-cols-1 px-5 gap-7 mb-5 uppercase">

                    {/* Frontend */}
                    <div className='' >
                        <h1 data-aos="fade-right"

                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" className="text-2xl text-primary text-center underline ">Front-End</h1>
                        <div className='grid lg:grid-cols-3 grid-cols-2 gap-7 mt-5'>
                            <div data-aos="fade-left"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={html} className='w-20 h-20' alt="" />
                                <h1 className="text-xl font-semibold text-white mb-1">Html 5</h1>
                            </div>
                            <div className='' data-aos="zoom-out"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={css} className='w-16 h-20' alt="" />
                                <h1 className="text-xl font-semibold text-white mb-1">CSS 3</h1>

                            </div>
                            <div data-aos="fade-down"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={java} className='w-16' alt="" />

                                <h1 className="text-xl font-semibold text-white mb-1">Javascript</h1>

                            </div>
                            <div className='my-2' data-aos="fade-up"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={react} className='w-20 h-20' alt="" />

                                <h1 className="text-xl font-semibold text-white mb-1">React js</h1>

                            </div>
                            <div data-aos="zoom-in"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={tailwind} className='w-20 h-20' alt="" />
                                <h1 className="text-xl font-semibold text-white mb-1">Tailwind</h1>


                            </div >
                            <div className='my-2' data-aos="fade-down"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={bootstrap} className='w-20 h-20' alt="" />

                                <h1 className="text-xl font-semibold text-white mb-1">Bootstrap</h1>

                            </div>
                            <div className='my-2' data-aos="zoom-in"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={firebase} className='w-20 h-20' alt="" />

                                <h1 className="text-xl font-semibold text-white mb-1">Firebase</h1>

                            </div>
                            <div className='my-2' data-aos="fade-right"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={sass} className='w-20 h-20' alt="" />

                                <h1 className="text-xl font-semibold text-white mb-1">SASS</h1>

                            </div>
                            <div data-aos="fade-left"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={gitHub} className='w-20 rounded-lg h-20 bg-white' alt="" />

                                <h1 className="text-xl font-semibold text-white mb-1">GitHub</h1>

                            </div>

                        </div>
                    </div>


                    {/* Back end  */}


                    <div className='' >
                        <h1 data-aos="fade-right"

                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" className="text-2xl text-primary text-center underline ">Backend</h1>
                        <div className='grid lg:grid-cols-3 grid-cols-2 gap-7 mt-5'>
                            <div data-aos="fade-left"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={express} className='w-20 h-20 bg-white rounded ' alt="" />
                                <h1 className="text-xl font-semibold text-white mt-1">Express</h1>
                            </div>
                            <div className='' data-aos="zoom-out"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={node} className='w-20 h-20 bg-white rounded' alt="" />
                                <h1 className="text-xl font-semibold text-white mt-1">Node</h1>

                            </div>
                            <div data-aos="fade-down"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={mongodb} className='w-20 h-20 bg-white rounded' alt="" />

                                <h1 className="text-xl font-semibold text-white mt-1">Mongodb</h1>

                            </div>
                            <div className='my-2' data-aos="fade-up"

                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <img src={nextJs} className='w-20 h-20 rounded-md' alt="" />

                                <h1 className="text-xl font-semibold text-white mt-1">Next js</h1>

                            </div>


                        </div>


                        <h1 className="text-2xl text-white text-center underline mt-8 ">Programming</h1>

                        <div className='' >
                          
                            <div className='grid lg:grid-cols-3 grid-cols-2 gap-7 mt-5'>
                                <div data-aos="fade-left"

                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <img src={C} className='w-20 h-20' alt="" />
                                    <h1 className="text-xl font-semibold text-white mb-1">C</h1>
                                </div>
                                <div className='' data-aos="zoom-out"

                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <img src={cc} className='w-16 h-20' alt="" />
                                    <h1 className="text-xl font-semibold text-white mb-1">C++</h1>

                                </div>
                                <div data-aos="fade-down"

                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <img src={python} className='w-16' alt="" />

                                    <h1 className="text-xl font-semibold text-white mb-1">Python</h1>

                                </div>
                              
                            </div>
                        </div>
                    </div>



                </div>
            </div>



        </>
    );
};

export default Skills;