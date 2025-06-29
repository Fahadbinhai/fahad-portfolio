import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/Aboutme/AboutMe';
import Technologies from '../../Components/Technologies/Technologies';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';

const MainPage = () => {
    return (
        <div className='bg-gray-800 min-h-screen'>

            {/* navbar */}


            <Navbar></Navbar>


            {/* banner section */}

            {/* banner section */}

            <Banner></Banner>

            {/* about me section */}

            <AboutMe></AboutMe>

            <Technologies></Technologies>

            <div>
                <ProjectsSection></ProjectsSection>
            </div>







        </div>
    );
};

export default MainPage;