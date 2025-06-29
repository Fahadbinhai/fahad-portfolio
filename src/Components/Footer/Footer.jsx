import React from 'react';
import logo from '../../assets/logo/Logo.jpg'

const Footer = () => {
    return (
        <footer className="footer flex flex-col md:flex-row justify-around items-center gap-4 
            bg-transparent text-neutral-content p-4 pb-20">
            
            <aside className="flex items-center gap-2 text-center">
                <img 
                    src={logo}  // এখানে নিজের লোগো path বা URL বসাও
                    alt="Logo"
                    className="w-8 h-8 object-contain rounded-full"
                />
                <p className="text-sm md:text-base">
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>
            </aside>

            <nav className="flex gap-4 mt-2 md:mt-0">
                {/* GitHub */}
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 
                        7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6
                        -.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.8.9.1-.7.4-1.1.7-1.3
                        -2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.4.1-3 0 0 1-.3
                        3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.7.1 3
                        .8.9 1.2 2 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8.9.8 1.8v2.6c0 .3.2.7
                        .8.6a11.5 11.5 0 0 0 7.8-10.9C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                </a>

                {/* Gmail */}
                <a href="mailto:fahadbin0212@gmail.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                        2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                        4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12
                        2.5 2.5S8.86 6 7.48 6C6.1 6 4.98 4.88 4.98 3.5zM3
                        8h4v12H3V8zm7 0h3.7v1.7h.1c.5-.9 1.7-1.8 3.5-1.8
                        3.8 0 4.5 2.5 4.5 5.8V20h-4v-6.2c0-1.5-.1-3.4-2.1
                        -3.4s-2.4 1.6-2.4 3.3V20h-4V8z" />
                    </svg>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
