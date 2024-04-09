// eslint-disable-next-line no-unused-vars
import React, { useState,useRef } from 'react';
import './Navbar.css'; 
import logo from "../../assets/logo.svg"
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {
    const[menu,setMenu] = useState('home');
    const menuRef = useRef();

    const openMenu = ()=>{
        menuRef.current.style.right='0'
    }
    const closeMenu = ()=>{
        menuRef.current.style.right='-350px'
    }
    return (
        <div className="navbar">
            <img src={logo}/>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />
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