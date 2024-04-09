// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css'; 
import logo from "../../assets/logo.svg"
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
    const[menu,setMenu] = useState('home')

    return (
        <div className="navbar">
            <img src={logo}/>
            <ul className='nav-menu'>
                <li><AnchorLink className='anchor-link' offset={50} href='#hero'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'? <img src={nav_underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'? <img src={nav_underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'? <img src={nav_underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu==='portfolio'? <img src={nav_underline}/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'? <img src={nav_underline}/>:<></>}</li>
            </ul>
            <button className='nav-action'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
        </div>
    );
}

export default Navbar