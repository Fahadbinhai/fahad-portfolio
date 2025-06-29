import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaHandPointRight } from 'react-icons/fa';

const Technologies = () => {
    return (
        <div className='mt-14 px-4'>
            <h3 className='text-white text-center font-bold text-3xl mb-10'>
                Technologies that I Use
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>

                {/* card 1 */}
                <Fade>
                    <div className="card bg-gradient-to-br from-gray-700 to-teal-700 text-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-10 transform transition-transform transition-shadow duration-300 min-h-[350px]">
                        <div className="card-body">
                            <h2 className="font-semibold text-xl text-center mb-4">Languages</h2>
                            <div className='space-y-3'>
                                <p className='flex items-center gap-3'><FaHandPointRight /> JavaScript</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> HTML</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> CSS</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> C</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> C++</p>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* card 2 */}
                <Fade>
                    <div className="card bg-gradient-to-br from-gray-700 to-teal-700 text-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-10 transition-transform transition-shadow duration-300 min-h-[350px]">
                        <div className="card-body">
                            <h2 className="font-semibold text-xl text-center mb-4">Tech Stack</h2>
                            <div className='space-y-3'>
                                <p className='flex items-center gap-3'><FaHandPointRight /> React</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> React Router</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> Tailwind CSS</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> Motion (Framer Motion)</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> Node.js</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> Express.js</p>
                                <p className='flex items-center gap-3'><FaHandPointRight /> Firebase</p>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* card 3 */}
                <Fade>
                    <div className="card bg-gradient-to-br from-gray-700 to-teal-700 text-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-10 transition-transform duration-300 min-h-[350px]">
                        <div className="card-body">
                            <h2 className="font-semibold text-xl text-center mb-4">Database</h2>
                            <div className='space-y-3'>
                                <p className='flex items-center gap-3'><FaHandPointRight /> MongoDB</p>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default Technologies;
