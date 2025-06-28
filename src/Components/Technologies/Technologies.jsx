import React from 'react';

const Technologies = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 mx-32'>
            {/* card 1 */}

            <div className="card bg-primary text-primary-content w-full h-[320px]">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>


            {/* card 2 */}

            <div className="card bg-primary text-primary-content w-full h-[320px]">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* card 3 */}

            <div className="card bg-primary text-primary-content w-full h-[320px]">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>









        </div>

    );
};

export default Technologies;