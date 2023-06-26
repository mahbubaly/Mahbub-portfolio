import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import '../../Pages/Style.css';

const Education = () => {
    return (
        <>



            <div className="pb-5">
                <div className="py-10 text-center ">
                    <a className="font-bold lg:text-2xl text-white border-b-4 rounded border-b-yellow-600"> My <span className='text-yellow-500 '>Skills</span></a>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 px-5 gap-7 mb-5">
                    <div>
                        <h1 className="text-2xl text-primary text-center underline ">Front-End</h1>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Html 5</h1>
                            <ProgressBar className=''
                                completed={85}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">CSS 3</h1>
                            <ProgressBar className=''
                                completed={80}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Javascript</h1>
                            <ProgressBar className=''
                                completed={70}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">React js</h1>
                            <ProgressBar className=''
                                completed={80}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Tailwind</h1>
                            <ProgressBar className=''
                                completed={80}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">Bootstrap</h1>
                            <ProgressBar className=''
                                completed={60}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Firebase</h1>
                            <ProgressBar className=''
                                completed={75}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">SASS</h1>
                            <ProgressBar className=''
                                completed={85}
                                bgColor='#EAA31C'
                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">GitHub</h1>
                            <ProgressBar className=''
                                completed={70}
                                bgColor='#EAA31C'

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}


                            />
                        </div>
                    </div>


                    {/* Back end  */}

                    <div>
                        <h1 className="text-2xl text-white text-center underline ">BACKEND</h1>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Express</h1>
                            <ProgressBar className=''
                                completed={75}


                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">Node js</h1>
                            <ProgressBar className=''
                                completed={65}

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">Mongodb</h1>
                            <ProgressBar className=''
                                completed={70}

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div className='my-2'>
                            <h1 className="text-xl font-semibold text-white mb-1">Nodemon js</h1>
                            <ProgressBar className=''
                                completed={50}

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">next js</h1>
                            <ProgressBar className=''
                                completed={40}

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <h1 className="text-2xl text-white text-center underline mt-8 ">Programming</h1>

                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">C</h1>
                            <ProgressBar className=''
                                completed={75}

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <div>
                            <h1 className="text-xl font-semibold text-white mb-1">C++</h1>
                            <ProgressBar className=''
                                completed={70}

                                transitionDuration='3s'
                                transitionTimingFunction='ease-in-out'
                                animateOnRender={true}

                            />
                        </div >
                        <div>
                            <h1 className="text-xl font-semibold text-white mt-2">Python <small>(six months experience )</small></h1>
                            <ProgressBar className=''
                                completed={50}

                                transitionDuration='3s'
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

export default Education;