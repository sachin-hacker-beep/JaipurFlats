import React from 'react'
import banner1 from '../assets/banner-01.jpg';
function Banner() {
  return (
    <>
    <section style={{backgroundImage:`url(${banner1})`}} className="hero1 container-fluid">
        <div className="hero1banner row d-flex" >
          <div className="hero1-banner-cont ">
            <span className="p-1  bg-white col-1">JAIPUR, INDIA</span>
            <h1 className="mt-4 text-uppercase text-white">hurry !<br/>
            get the<br/>best <br/> villa<br/> for you</h1>
          </div>
        </div>
    </section>  
    </>
  )
}

export default Banner;
