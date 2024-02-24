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
                <title>  Mahbubu portfolio | Skills</title>
            </Helmet>


            <div className='lg:pb-[50px] opacity-80 bg-gradient-to-r from-black  to-red-900'>
                <div className=" lg:mb-2 lg:p-0 p-5 container mx-auto " id='skill'>
                    <div className="py-10 text-center uppercase ">
                        <a className="font-bold lg:text-2xl text-[18px] pb-2 text-white border-b-[2px] rounded border-b-yellow-600"> My <span className='text-yellow-500 '>Skills</span></a>
                    </div>
                    <div className="grid md:grid-cols-2   grid-cols-1 px-5 gap-7  uppercase">

                        {/* Frontend */}
                        <div className=' border-none lg:border-r-2 border-black'  >
                            <h1 className="text-2xl text-primary text-center underline ">Front-End</h1>
                            <div className='grid lg:grid-cols-3 grid-cols-2 gap-7 mt-5'>
                                <div >
                                    <img src={html} className='lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]' alt="" />
                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">Html 5</h1>
                                </div>
                                <div className=''>
                                    <img src={css} className='lg:w-[44px] lg:h-[60px] w-[40px] h-[40px]' alt="" />
                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">CSS 3</h1>

                                </div>
                                <div >
                                    <img src={java} className='lg:w-[44px] lg:h-[60px] w-[40px] h-[40px]' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">Javascript</h1>

                                </div>
                                <div className='my-2'>
                                    <img src={react} className='lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">React js</h1>

                                </div>
                                <div >
                                    <img src={tailwind} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />
                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">Tailwind</h1>


                                </div >
                                <div className='my-2' >
                                    <img src={bootstrap} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">Bootstrap</h1>

                                </div>
                                <div className='my-2' >
                                    <img src={firebase} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">Firebase</h1>

                                </div>
                                <div className='my-2' >
                                    <img src={sass} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">SASS</h1>

                                </div>
                                <div >
                                    <img src={gitHub} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-lg  bg-white' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">GitHub</h1>

                                </div>

                            </div>


                        </div>


                        {/* Back end  */}




                        <div className='' >
                            <h1

                                data-aos-easing="ease-in-out" className="text-2xl text-primary text-center underline ">Backend</h1>
                            <div className='grid lg:grid-cols-3 grid-cols-2 gap-7 mt-5'>
                                <div >
                                    <img src={express} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] bg-white rounded ' alt="" />
                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mt-1">Express</h1>
                                </div>
                                <div className=''>
                                    <img src={node} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] bg-white rounded' alt="" />
                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mt-1">Node</h1>

                                </div>
                                <div >
                                    <img src={mongodb} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] bg-white rounded' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mt-1">Mongodb</h1>

                                </div>
                                <div className='my-2'>
                                    <img src={nextJs} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-md' alt="" />

                                    <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mt-1">Next js</h1>

                                </div>


                            </div>


                            <h1
                                className="text-2xl text-white text-center underline mt-8 ">Programming</h1>

                            <div className='' >

                                <div


                                    className='grid lg:grid-cols-3 grid-cols-2 gap-7 mt-5'>
                                    <div >
                                        <img src={C} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />
                                        <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">C</h1>
                                    </div>
                                    <div className='' >
                                        <img src={cc} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />
                                        <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">C++</h1>

                                    </div>
                                    <div>
                                        <img src={python} className='lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]' alt="" />

                                        <h1 className="lg:text-[18px] text-[16px]  font-medium text-white mb-1">Python</h1>

                                    </div>

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