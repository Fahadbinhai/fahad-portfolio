import React from 'react';
import logo from '../../assets/logo/Logo.jpg'
import resume from '../../assets/resume/Resume of Fahad Bin Hai Tihan .pdf'

const Navbar = () => {

    const links = <div className='flex items-center gap-5'>

        <a href="#about" className="cursor-pointer text-white hover:text-cyan-400">
            About
        </a>
        <a href="#technology" className="cursor-pointer text-white hover:text-cyan-400">
            Technology
        </a>
        <a href="#projects" className="cursor-pointer text-white hover:text-cyan-400">
            Projects
        </a>
        <a href="#contact" className="cursor-pointer text-white hover:text-cyan-400">
            Contact
        </a>
    </div>




    return (
        <div className="navbar bg-transparent backdrop-blur-md border-b border-white/10 shadow-sm text-white fixed top-0 left-0 z-50 py-4">
            <div className="navbar-start">
                <img className='w-15 h-15 rounded-full hidden lg:block' src={logo} alt="" />
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1f5156]/90 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="ml-3 normal-case font-semibold text-2xl">Fahad Bin Hai</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} download='Resume of Fahad' className="btn btn-outline w-36 btn-md border-cyan-400 text-white hover:bg-cyan-400 hover:text-white">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
