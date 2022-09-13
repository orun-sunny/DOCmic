import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">
            <div className='footer'>
            <div>
            <h6 className="p-6 normal-case navbar-center hidden lg:flex text-primary text-xl p-5">Doc <span className='text-secondary' >mic .</span> </h6>
                    <p>simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has bee   </p>
                    <i class="fab fa-instagram mx-2"></i>
                  <i class="fab fa-facebook-square mx-2 "></i>
                  <i class="fab fa-facebook-messenger mx-2"></i>
                  <i class="fab fa-linkedin mx-2"></i>
                  <i class="fab fa-youtube mx-2"></i>
                  <i class="fab fa-twitter-square mx-2"></i>
                  <div className='my-10 text-center'>
                <p>Copyright @222 Medicom All Rights Reserved</p>
            </div>
                </div>



                <div>
                    <span className="footer-title">Ouick Links</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Our Gallery</a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Our Doctors</a>
                    <a className="link link-hover">Our Latest News</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Carers</a>
                </div>
                <div>
                    <span className="footer-title">Opening Hours</span>
                    <a className="link link-hover">Mon- Tue :  08:00 AM- 05:00 PM</a>
                    <a className="link link-hover">Wed- Thu  : 09:00 AM- 06:00 PM</a>
                    <a className="link link-hover">Mon- Tue :  08:00 AM- 05:00 PM</a>
                    <a className="link link-hover">Wed- Thu  : 09:00 AM- 06:00 PM</a>
                    <a className="link link-hover">Mon- Tue :  08:00 AM- 05:00 PM</a>
                    <a className="link link-hover">Wed- Thu  : 09:00 AM- 06:00 PM</a>
                </div>
            </div>
          
        </footer>
    );
};

export default Footer;