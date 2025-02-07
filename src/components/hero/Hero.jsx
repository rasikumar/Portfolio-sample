/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from "../../assets/profile_img.svg";
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} />
      <h1>
        <span>I'm  Maxwell,</span> I'm a frontend developer
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi corporis
        accusamus, obcaecati ullam ipsam voluptatem nemo rerum reiciendis
        voluptas magni.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">my Resume</div>
      </div>
    </div>
  );
};

export default Hero;
