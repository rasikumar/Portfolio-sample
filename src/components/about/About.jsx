// eslint-disable-next-line no-unused-vars
import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import './About.css'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme}/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, at? Repudiandae molestiae iusto nihil debitis ea, esse blanditiis reiciendis, facere similique ducimus perferendis! Dolorem voluptate est atque architecto sunt odio! consectetur adipisicing elit. Accusamus sequi totam at</p>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum a omnis quas aut explicabo atque tempore praesentium dolorum, consequatur sit. Ipsam rem quasi ullam blanditiis perferendis ad, nemo excepturi? amet consectetur adipisicing elit. Iusto, facilis magnam </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>javaScript</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React.JS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"65%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects</p>
            </div>
            <hr /><div className="about-achievement">
                <h1>10+</h1>
                <p>Happy Clients</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About