import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { ReactTyped } from 'react-typed';
import picture from '../../assets/super pic.jpg';
import { Link } from 'react-router';
import resume from '../../assets/resume/Resume of Fahad Bin Hai Tihan .pdf'

const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 pt-32 px-4 md:px-12 lg:px-42">

            {/* Text section */}
            <div className="lg:col-span-4 text-white flex flex-col items-center lg:items-start">

                <div className="text-center lg:text-left">
                    <h1 className="font-volkhov font-bold text-5xl md:text-6xl mb-2">HI !</h1>
                    <h1 className="font-volkhov font-bold text-4xl md:text-5xl">I'M FAHAD BIN HAI</h1>
                </div>

                <div className="mt-6 md:mt-10">
                    <ReactTyped
                        className="text-red-500 text-2xl md:text-3xl lg:text-4xl font-bold font-volkhov mb-2"
                        strings={[
                            'Web Developer',
                            'React Developer',
                            'MERN Stack Developer',
                            'Programmer'
                        ]}
                        typeSpeed={80}
                        backSpeed={50}
                        backDelay={1500}
                        loop
                    />

                    <p className="mt-4 text-center lg:text-left text-sm md:text-base max-w-md">
                        I’m a passionate MERN Stack Developer skilled in React, JavaScript, Express and MongoDB.
                        I love building modern, responsive websites with clean design and smooth user experience.
                        Always eager to learn new technologies to craft better, user-friendly solutions for the future.
                    </p>
                </div>

                <div className="flex justify-center lg:justify-start gap-4 mt-6">
                    <Link to='https://github.com/Fahadbinhai' className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 flex justify-center items-center text-blue-600 hover:bg-white hover:text-blue-700">
                        <SiGithub />
                    </Link>
                    <Link to="https://www.linkedin.com/in/fahad-bin-hai-tihan-a533342a7" className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 flex justify-center items-center text-blue-600 hover:bg-white hover:text-blue-700">
                        <FaLinkedin />
                    </Link>
                    <a href="#contact" className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 flex justify-center items-center text-blue-600 hover:bg-white hover:text-blue-700">
                        <IoMdMail />
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                    <a href={resume} download='Resume of Fahad' >
                        <button className="btn btn-outline hover:bg-cyan-400 hover:border-cyan-400 w-40">Download Resume</button>
                    </a>
                    <a href="#contact"><button className="btn btn-outline w-40">Contact ME</button></a>
                </div>
            </div>

            {/* Image section */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <img className="w-72 md:w-96 lg:w-[400px] xl:w-[500px] h-auto rounded-full object-cover" src={picture} alt="Fahad Bin Hai" />
            </div>

        </div>
    );
};

export default Banner;
