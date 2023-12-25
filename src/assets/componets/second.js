import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/second.css';
import Logo from '../../images/19362653.jpg';
import AOS from 'aos';
function Second() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return <>
    <div className='second-page-container' id='about'>
        <h2 className='about-me' data-aos="fade-up">ABOUT ME</h2>
        <div className="container">
        <div className="child">
        <div   className="know-me" data-aos="flip-right">Get to know me!</div>
        <div className='about-content' data-aos="slide-up" >Hi, I'm <span className='size-text'  data-aos="zoom-out-up" data-aos-delay='500'>Pradeep</span>, a <span className='size-text' data-aos="zoom-in-down" data-aos-delay='500'>Front-end developer</span> with expertise in HTML, CSS, and JS. Passionate about creating user-friendly designs, I'm actively seeking new opportunities.
        Despite my background, I've completed a Full Stack Web Development course on Udemy, sharpening my frontend skills. I'm eager to design captivating user interfaces and committed to ongoing learning, ready to contribute as a junior frontend developer.
        <div className='about-content second' data-aos="ease-in-out-quart">I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
         </div>
         
        </div>
        <div className="image-second-container" data-aos="fade-up"> <img   className='image'  src={Logo} alt="" /></div>
        
          
       
        </div>
        <Link to='page' smooth={true} offset={-20} duration={1000}> <div className="button-div1"><div className="button1"><button className='project-button1'>CONTACT ME</button></div></div></Link>
    </div>
  </>
    
  
}

export default Second