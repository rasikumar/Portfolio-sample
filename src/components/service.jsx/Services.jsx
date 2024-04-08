// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'
import arrow from '../../assets/arrow.svg'

const Services = () => {
  return (
  <div className="services">
    <div className="services-title">
      <h1>My Services</h1>
      <img src={theme_pattern}/>
    </div>
    <div className="services-container">
      {Services_data.map((service, index)=>{
        return <div key={index} className="services-format">
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow}/>
          </div>
        </div>
      })}
    </div>
  </div>    
  )
}

export default Services