import React from 'react';
import pose from '../../assets/images/pose_2.png';
import backgrounddoc from '../../assets/images/backgrounddoc.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='card w-96  '>
                    <figure><img className='absolute' src={backgrounddoc} alt="" /></figure>
                    <img src={pose} className="max-w-sm rounded-lg " />
                </div>
                <div className='p-28'>
                    <h1 className="text-5xl font-bold ">Your Health is our Top <br /> Priority</h1>
                    <p className="py-6">There are many variations of passages of lpsum <br /> available, but the majority hae suffered..</p>
                    <PrimaryButton> Meet Our Specialist </PrimaryButton>

                    {/* try */}

                    <div class=" bg-base-100 flex  ">
                        <div class="card-body  ">
                            <h2 class="card-title text-secondary">262K+</h2>
                            <p>Recovered Patients</p>
                            
                        </div>
                        <div class="card-body ">
                            <h2 class="card-title text-secondary ">96%</h2>
                            <p> Satisfaction Rate</p>
                            
                        </div>
                        <div class="card-body  ">
                            <h2 class="card-title text-secondary">86+</h2>
                            <p>Expert Doctors</p>
                            
                        </div>
                    </div>
                    




                </div>


            </div>

        </div>
    );
};

export default Banner;