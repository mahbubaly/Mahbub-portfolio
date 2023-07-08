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




const Skills = () => {
    return (
        <>
            <Helmet>
                <title> Mahbubu portfolio | Skills</title>
            </Helmet>


            <div className="lg:mb-20 container mx-auto" id='skill'>
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
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-7 mt-5'>
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

                    <div data-aos="fade-left"

                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <h1 className="text-2xl text-white text-center underline ">BACKEND</h1>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Express</h1>
                            <ProgressBar className=''
                                completed={75}


                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">Node js</h1>
                            <ProgressBar className=''
                                completed={65}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Mongodb</h1>
                            <ProgressBar className=''
                                completed={70}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">Nodemon js</h1>
                            <ProgressBar className=''
                                completed={50}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">next js</h1>
                            <ProgressBar className=''
                                completed={40}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <h1 className="text-2xl text-white text-center underline mt-8 ">Programming</h1>

                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">C</h1>
                            <ProgressBar className=''
                                completed={75}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">C++</h1>
                            <ProgressBar className=''
                                completed={70}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <div>
                            <h1 className="text-xl font-semibold text-white mt-2">Python <small>(six months experience )</small></h1>
                            <ProgressBar className=''
                                completed={50}

                                transitionDuration='6s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >


                    </div>

                </div>
            </div>

        </>
    );
};

export default Skills;