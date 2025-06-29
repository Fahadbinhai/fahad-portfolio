import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/Aboutme/AboutMe';
import Technologies from '../../Components/Technologies/Technologies';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import ContactMe from '../../Components/ContactMe/ContactMe';
import Footer from '../../Components/Footer/Footer';

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

            <ContactMe></ContactMe>

            <Footer></Footer>







        </div>
    );
};

export default MainPage;