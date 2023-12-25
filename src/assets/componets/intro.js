import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/intro.css';
import Intros from '../../images/intro.jpg';
import AOS from 'aos';

function Intro() {
      useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return <>
    <div className="main-div" id='intro' >
    <div    className="image-div">
    <img  data-aos="fade-up" className='intro-img' src={Intros} alt="" />
    <div className="main-name"><span className='shadow' ><h5 data-aos="fade-up">HI, I'M PRADEEP </h5></span></div>
    <div>
    {/* <div className="decription-main">
    <div className="description">Web Developer</div>
    </div> */}
    
    </div>
    
    </div>
    <div className="info">
      <div className='info-2' data-aos="flip-left">
      A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product .
      </div></div>
      <Link to='projects' smooth={true} offset={-20} duration={1000}><div className="button-div" ><div className="button" ><button className='project-button'>PROJECT</button></div></div></Link>
      
    </div>
  </>
    
  
}

export default Intro