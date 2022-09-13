import React from 'react';

import background from '../../assets/images/background2.png';

import appointment from '../../assets/images/pose_7.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            // img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
      
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
     
        },
    ];
    return (
        <section style={{
            // background: `url(${appointment})`
        }}
            className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-black px-12 pt-16'>
            <div className='card w-96 grid-cols-6 '>
                <figure><img className='absolute' src={background} alt="" /></figure>
                <img src={appointment} className="max-w-sm rounded-lg " />
            </div>



            <div className='flex-1 pr-16'>
                <h3 className='text-xl text-primary '>Our Hospital Feature </h3>
                <h1 className='text-4xl text-black'>Make An Appointment Easy And Fast Services </h1>

                <div className='grid grid-cols-1  lg:grid-cols-2 gap-x-24 gap-y-8 text-black '>

                    <div class="card w-80 h-78 bg-base-100 shadow-xl  ">
                        <div class="card-body flex">
                            <div class="card-actions">
                                <h2 class="card-title">24 Hours  </h2>

                                <div class=" pl-16">

                                    <image class="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </image>
                                </div>
                            </div>


                            <p>Seduahag perspiciati under omnised atused error.</p>
                            
                        </div>
                    </div>

                    <div class="card w-80 h-48 bg-base-100 shadow-xl  ">
                        <div class="card-body flex">
                            <div class="card-actions">
                                <h2 class="card-title">Exclusive </h2>

                                <div class=" pl-16">

                                    <image class="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </image>
                                </div>
                            </div>


                            <p>Seduahag perspiciati under omnised atused error.</p>
                          
                        </div>
                    </div>

                    <div class="card w-80 h-48 bg-base-100 shadow-xl  ">
                        <div class="card-body flex">
                            <div class="card-actions">
                                <h2 class="card-title">Cardiology!</h2>

                                <div class=" pl-16">

                                    <image class="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </image>
                                </div>
                            </div>


                            <p>Seduahag perspiciati under omnised atused error.</p>
                          
                        </div>
                    </div>
                    <div class="card w-80 h-48 bg-base-100 shadow-xl  ">
                        <div class="card-body flex">
                            <div class="card-actions">
                                <h2 class="card-title">Cardiology!</h2>

                                <div class=" pl-16">

                                    <image class="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </image>
                                </div>
                            </div>


                            <p>Seduahag perspiciati under omnised atused error.</p>
                          
                        </div>
                    </div>


                    {/* <InfoCard className="text-primary" cardTitle="Cardiology" bgClass="bg-gradient-to-r" img={clock}></InfoCard>
<InfoCard cardTitle="Our Locations" bgClass="bg-accent" img={marker}></InfoCard>
<InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard> */}
                </div>
             
            </div>
            <div className=' hidden lg:block '>







                {/* <img className='mt-[100px] p-28' src={appointment} alt="" /> */}
            </div>

        </section>
    );
};

export default Testimonials;