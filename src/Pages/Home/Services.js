import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import Ikbal from '../../assets/images/Ikbal.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',

        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',

        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',

        },
    ];
    return (

        <section className='mt-16 justify-center p-0'>


            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services For Your Health</h2>
            </div>

            <div class="carousel w-full border-2 ">
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-black '> */}



                <div id="slide1" class="carousel-item relative grid grid-cols-1 lg:grid-cols-2 gap-2 text-black  ">
                    <div className='text-justify'>
                        <p className='text-black pt-5 '>simply dummy text of the printing and  <br /> simply dummy text of the printing <br />  andsimply dummy text of the printing and simply dummy text of the printing and </p>
                    </div>
                    <div className='grid  lg:grid-cols-1 '>
                        <img src="https://placeimg.com/800/200/arch" class="w-96" />

                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>

                </div>



                {/* <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>











        </section>




    );
};

export default Services;