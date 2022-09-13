import React from "react";
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from "../Shared/PrimaryButton";
import background from '../../assets/images/headfoot.png';

import pose from '../../assets/images/pose_8.png';

const Contact = () => {
  return (





    <section style={{

    }}
      className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-black px-12 pt-16'>
      <div className='flex-1 pl-16'>
        <h3 className='text-xl text-primary font-bold'>FAQ Questions</h3>
        <h1 className='text-4xl text-black'>Get Your General Answer </h1>





        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-8">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-black-content peer-checked:peer-checked:text-secondary-content">
            Get Your General Answer                                            
          </div>
          <div class="collapse-content">
            <p>Lorem*</p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-black-content peer-checked:peer-checked:text-secondary-content">
          What is one Medical’s care?                                            
          </div>
          <div class="collapse-content">
            <p>Lorem*</p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-plus border  border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-black-content peer-checked:peer-checked:text-secondary-content">
          Will I always see my own doctor?                                  
          </div>
          <div class="collapse-content">
            <p>Lorem*</p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-black-content peer-checked:peer-checked:text-secondary-content">
           What is evidence based medicine?                            
          </div>
          <div class="collapse-content">
            <p>Lorem*</p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-black-content peer-checked:peer-checked:text-secondary-content">
          What is an academic medical center?                           
          </div>
          <div class="collapse-content">
            <p>Lorem*</p>
          </div>
        </div>







      </div>
      <div className=' hidden lg:block '>



        <div className='card w-96 md:grid-cols-1 '>
          <figure><img className='absolute mt-96' src={background} alt="" /></figure>
          <img src={pose} className="max-w-sm rounded-lg " />
        </div>



        {/* <img className='mt-[100px] p-28' src={appointment} alt="" /> */}
      </div>

    </section>


    // <div style={{
    //     background:`url(${appointment})`
    // }} className='bg-primary px-10 py-14 '>
    //   <div className='text-center pb-14 text-white'>
    //     <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
    //       Contact Us
    //     </p>
    //     <h1 className='text-4xl'>Stay connected with us</h1>
    //   </div>
    //   <div className='grid grid-cols-1 justify-items-center gap-5'>
    //     <input
    //       type='text'
    //       placeholder='Email Address'
    //       className='input w-full max-w-md'
    //     />
    //     <input
    //       type='text'
    //       placeholder='Subject'
    //       className='input w-full max-w-md'
    //     />
    //     <textarea
    //       className='textarea w-full max-w-md'
    //       placeholder='Your message'
    //       rows={6}
    //     ></textarea>
    //     <PrimaryButton>Submit</PrimaryButton>
    //   </div>
    // </div>
  );
};

export default Contact;