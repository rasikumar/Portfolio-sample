// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css'; 
import logo from "../../assets/logo.svg"

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo}/>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
            <button className='nav-action'>Connect with me</button>
        </div>
    );
}

export default Navbar