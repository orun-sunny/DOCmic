import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">Your Health is our Top <br/> Priority</h1>
                    <p className="py-6">There are many variations of passages of lpsum <br/> available, but the majority hae suffered..</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;