import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        
        
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Departments</Link></li>
        <li><Link to="/review">Pages</Link></li>
        <li><Link to="/login">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <PrimaryButton>Free Consultation</PrimaryButton> */}
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                
                
                <h6 className="pr-2 normal-case navbar-center hidden lg:flex text-primary text-xl p-5">Doc <span className='text-secondary' >mic .</span> </h6>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                <div className=" navbar-end">
    <a class="btn normal-case btn-primary">Free Consultation</a>
  </div>
            </div>
            
        </div>
    );
};

export default Navbar;