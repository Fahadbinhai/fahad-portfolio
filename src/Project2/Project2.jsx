import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Project2Slider from './Project2Slider';
import { Link } from 'react-router';

const Project2 = () => {
    return (
        <div className="card bg-base-100 shadow-md flex flex-col lg:flex-row 
            w-full max-w-[1300px] mx-auto border-4 rounded-xl">

            {/* Left side - slider box */}
            <div className="w-full lg:w-1/2 bg-gray-800 flex items-center justify-center p-4 md:p-6 lg:p-8">
                <div className="w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded overflow-hidden shadow-lg">
                    <Project2Slider />
                </div>
            </div>

            {/* Right side - details */}
            <div className="flex flex-col w-full lg:w-1/2 bg-gray-800 text-white p-4 md:p-6 lg:p-8 xl:p-10">

                {/* Title & Description (Center Aligned) */}
                <div className="text-center mb-6">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">MarathonMania</h2>
                    <p className="font-medium text-base md:text-lg text-gray-200">
                        MarathonMania is a web application where users can create and manage their own marathons, join marathons created by others, and keep track of the events they’ve organized or applied to. It makes discovering, hosting, and participating in marathon events simple and interactive — all in one place.
                    </p>
                </div>

                {/* Feature List (Left Aligned) */}
                <ul className="space-y-2 text-gray-300 mb-6 text-left">
                    <li className="flex items-start"><GoDotFill className="mt-1" /> User can create Marathon Events, Delete and Update</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> User can join in marathons created by others</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> User can see the upcoming marathon events</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> User can read blogs about marathons</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> <span className="text-[#DC143C]">Front-end Technology:</span> React, React Router, DaisyUi, Firebase etc</li>
                    <li className="flex items-start"><GoDotFill className="mt-1" /> <span className="text-[#DC143C]">Back-end Technology:</span> Node.js, Express.js, MongoDB</li>
                </ul>

                {/* Buttons (Left Aligned) */}
                <div className="flex flex-wrap gap-4 text-left">
                    <Link to='https://marathon-handle-project.web.app/' className="btn btn-outline hover:bg-cyan-500 min-w-[140px] h-12">Live Preview</Link>
                    <Link to='https://github.com/Fahadbinhai/Marathon-management-client' className="btn btn-outline min-w-[140px] h-12">Front-End Code</Link>
                    <Link to='https://github.com/Fahadbinhai/Marathon-management-server' className="btn btn-outline min-w-[140px] h-12">Back-End Code</Link>
                </div>
            </div>
        </div>
    );
};

export default Project2;
