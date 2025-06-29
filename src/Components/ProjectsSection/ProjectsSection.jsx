import React from 'react';
import Project1 from '../../Project1/Project1';
import { Zoom } from 'react-awesome-reveal';
import Project2 from '../../Project2/Project2';
import Project3 from '../../Project3/Project3';

const ProjectsSection = () => {
    return (
        <div id='projects' className='text-white text-center px-4 sm:px-6 lg:px-8 xl:px-12 md:py-16 lg:py-20 max-w-[1400px] mx-auto'>

            <h3 className='text-3xl md:text-4xl font-bold pb-8 md:pb-12'>My Recent Project</h3>

            {/* TODO: Projects needed to be added */}

            {/* project 1 */}
            <Zoom>
                <Project1 />
            </Zoom>

            <Zoom className='mt-16'>
                <Project2></Project2>
            </Zoom>

            <Zoom className='mt-16'>
                <Project3></Project3>
            </Zoom>
        </div>
    );
};

export default ProjectsSection;
