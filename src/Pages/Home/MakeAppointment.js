import React from 'react';
import background from '../../assets/images/background2.png';

import appointment from '../../assets/images/pose_4.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            // background: `url(${appointment})`
        }} 
        className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-black px-12 pt-16'>
              <div className='flex-1 pl-16'>
                <h3 className='text-xl text-primary font-bold'>16+ Years Experiences </h3>
                <h1 className='text-4xl text-black'>We Are Always ensure Best Medical Treatment For Your Health</h1>
                <p className='text-black pt-5'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
              
            </div>
            <div className=' hidden lg:block '>



            <div className='card w-96 md:grid-cols-1 '>
                    <figure><img className='absolute' src={background} alt="" /></figure>
                    <img src={appointment} className="max-w-sm rounded-lg " />
                </div>



                {/* <img className='mt-[100px] p-28' src={appointment} alt="" /> */}
            </div>
          
        </section>
    );
};

export default MakeAppointment;