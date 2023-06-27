import React from 'react';
import img1 from '../../assets/Images/Projects/A12.png'
import img2 from '../../assets/Images/Projects/a11.png'
import img3 from '../../assets/Images/Projects/a10.png'
import img4 from '../../assets/Images/Projects/food.png'
import img5 from '../../assets/Images/Projects/appliedJon.png'
import img6 from '../../assets/Images/Projects/127.0.0.1_5500_index.html.png'
import '../../Pages/Style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tilt } from 'react-tilt';
import { FaArrowCircleRight } from 'react-icons/fa';

const Projects = () => {

    const projects = [
        {
            image: img1,
            link: 'https://sci-fi-toys.web.app/'
        },
        {
            image: img2,
            link: 'https://foreign-language-camping.web.app/'
        },
        {
            image: img3,
            link: 'https://job-hunter-app.netlify.app/'
        },
        {
            image: img4,
            link: 'https://chef-hunter-5ddb4.web.app/'
        },
        {
            image: img5,
            link: 'https://nmcsakib.netlify.app/'
        },
        {
            image: img6,
            link: 'https://list-of-ai.netlify.app/'
        },
    ]
    return (
        <>
            <div id='portfolio' className=' mx-auto mt-10'>
               
            </div>
        </>
    );
};

export default Projects;