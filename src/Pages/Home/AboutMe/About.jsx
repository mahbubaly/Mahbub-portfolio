import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Style.css'
// ..
AOS.init();

const About = () => {
    return (
        <>
            <div className='opacity-80 bg-gradient-to-r from-black  to-red-900'>

                <div className='container mx-auto'
                    data-aos="fade-up"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out">

                    <div className='p-8 space-y-4'>
                        <a className=" hover:underline    w-full  font-bold lg:text-2xl text-xl text-white"> About <span className='text-yellow-500 '>Me</span></a>

                        <p className='text-white lg:text-xl '>
                            I'm  <span className='text-yellow-500 '> <a href=""> Mahbubur Rahman Mahbub</a> </span> , From Sylhet , Bangladesh. I'm currently doing  <span className='text-yellow-500 '> <a href=""> Computer science and Engineering</a> </span>  from  <span className='text-yellow-500 hover:underline'> <a href="https://www.lus.ac.bd">Leading University </a> </span> Kamalbazar , Sylhet.  I am  web developer who is passionate about building stunning and useful web applications. With a strong background in programming , I completed 130 Problems from Codeforce, and a dedication to lifelong learning, I am well-positioned to have a big influence in the web development industry.  I have two years frontend development and half year back-end development. Moreover, I have good
                            communication skill. Which always help me to make good relation with everyone easily. <br />

                            In Addition I completed MERN stack web development course from <span className='text-yellow-500 hover:underline'> <a href="https://www.programming-hero.com">Programming Hero</a></span>. I am an expert in <span className='text-yellow-500 '> <a href=""> HTML,</a> </span> ,
                            <span className='text-yellow-500 '> <a href=""> CSS</a> </span>, <span className='text-yellow-500 '> <a href=""> Javascript</a> </span> , <span className='text-yellow-500 '> <a href=""> Reacts</a> </span>, and <span className='text-yellow-500 '> <a href=""> React-router-dom</a> </span>, with proficiency in CSS frameworks such as <span className='text-yellow-500 '> <a href=""> Tailwind</a> </span> and <span className='text-yellow-500 '> <a href=""> Bootstrap</a> </span> . On the backend, I have expertise in <span className='text-yellow-500 '> <a href=""> MongoDB</a> </span>  for authentication and am also knowledgeable in <span className='text-yellow-500 '> <a href=""> Firebase</a> </span> , <span className='text-yellow-500 '> <a href=""> Express</a> </span>, and <span className='text-yellow-500 '> <a href=""> Node.js</a> </span>. I am familiar with Next.js   as well as Typewriter and have a strong understanding of web development technologies. With my skills and experience, I can create beautiful and efficient web applications. <br />


                            However, after completing development course, By my hard word as well for my  knowledge I found a job the name of company is Pixeleton they only focus on making market place and I proudly done this job.Only two months i work with them. As i  beginners, so it's quite difficult to manage, yet i managed this job very well.   <br />

                            In my free time, I binge on Netflix and YouTube, listen to songs, go for long drives, and try new cuisines at local restaurants (foodie at heart).



                        </p>
                    </div>
                </div>
            </div>




        </>
    );
};

export default About;