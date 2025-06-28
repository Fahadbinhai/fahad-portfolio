import React from 'react';

const AboutMe = () => {
  return (
    <div className="max-w-3xl lg:max-w-4xl mx-auto mt-12 bg-gradient-to-r from-cyan-700/40 to-blue-900/40 border border-cyan-500/30 rounded-xl shadow-lg px-6 py-8 text-white">
      <h3 className="text-3xl font-bold text-center mb-2">About Me</h3>
      <div className="h-1 w-16 bg-cyan-400 mx-auto mb-4 rounded"></div>
      <p className="text-center md:text-justify leading-relaxed">
        Hi! I’m Fahad Bin Hai — a university student and an aspiring MERN Stack Developer.
        I enjoy working on both frontend and backend using React, Node.js, Express.js, MongoDB and tools like React Router, HTML and CSS to build modern, responsive websites.
        Coding isn’t just a skill for me — it’s a real passion to craft user-friendly solutions and keep exploring new technologies.
        Beyond coding, I love outdoor sports which keeps me energetic and helps me think creatively.
        For me, success means turning ideas into practical, meaningful solutions that solve real problems and improve people’s lives.
      </p>
    </div>
  );
};

export default AboutMe;
