import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12 '>
            <Banner></Banner>
         
            
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;