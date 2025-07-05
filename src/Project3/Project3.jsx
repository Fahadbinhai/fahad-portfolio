import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Project3Slider from './Project3Slider';
import { Link } from 'react-router';
import { IoLink } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';

const Project3 = () => {
    return (
        <div className="card bg-base-100 shadow-md flex flex-col lg:flex-row 
            w-full max-w-[1300px] mx-auto border-4 rounded-xl">

            {/* Left side - slider box */}
            <div className="w-full lg:w-1/2 bg-gray-800 flex items-center justify-center p-4 md:p-6 lg:p-8">
                <div className="w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded overflow-hidden shadow-lg">
                    <Project3Slider />
                </div>
            </div>

            {/* Right side - details */}
            <div className="flex flex-col w-full lg:w-1/2 bg-gray-800 text-white p-4 md:p-6 lg:p-8 xl:p-10">

                {/* Title & Description (Center Aligned) */}
                <div className="text-center mb-6">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">AppStore</h2>
                    <p className="font-medium text-base md:text-lg text-gray-200">
                        AppStore is a user-friendly web application.
                    </p>
                </div>

                {/* Feature List (Left Aligned) */}
                <ul className="space-y-2 text-gray-300 mb-6 text-left">
                    <li className="flex items-start"><GoDotFill className="mt-1" /> User Can Login</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> User Can add Comment</li>
                    {/* <li className="flex items-start"><GoDotFill className="mt-1" /> In Details Page user can see the full details of the Hobby Group</li> */}
                    <li className="flex items-start"><GoDotFill className="mt-1" /> <span className="text-[#DC143C]">Front-end Technology:</span> React, React Router, DaisyUi, Firebase etc</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> <span className="text-[#DC143C]">Back-end Technology:</span> Node.js, Express.js, MongoDB</li>
                    <p> <small className='text-red-600'># this is not my best project. This is a dummy project. soon it will replaced </small> </p>
                </ul>

                {/* Buttons (Left Aligned) */}
                <div className="flex flex-wrap gap-4 text-left">
                    <Link to='https://app-store-6796c.web.app/' className="btn btn-outline hover:bg-cyan-500 min-w-[140px] h-12"><FaEye />Live Preview</Link>
                    <Link to='https://github.com/Fahadbinhai/AppStore' className="btn btn-outline min-w-[140px] h-12"><IoLink />Front-End Code</Link>
                    {/* <Link to='https://github.com/Fahadbinhai/hobbyHub-server' className="btn btn-outline min-w-[140px] h-12"><IoLink />Back-End Code</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Project3;
