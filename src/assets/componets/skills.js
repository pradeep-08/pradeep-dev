import React, { useEffect } from 'react';
import '../styles/skills.css';
import Logo from '../../images/skillstwo.jpg';
import AOS from 'aos';
function Skills() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return <><div className="main-div1 main-div-2">

        <h2 className='skills'><div className="my-skills" data-aos="fade-up">MY SKILLS</div></h2>
        
        <div className="skills-container-main">
        <div className="skills-container-second">
            <img  className="skills-image" src={Logo} alt="" />
            </div>
        <div className="skills-container" data-aos="slide-right">
            <div className="first-row" data-aos="slide-left"> 
            <div className="skills-items" >HTML</div>
            <div className="skills-items">CSS</div>
            <div className="skills-items">GIT</div>
            <div className="skills-items">GITHUB</div>
            </div>
           <div className="second-row" data-aos="slide-right"> 
           <div className="skills-items">REACT</div>
            <div className="skills-items">JS</div>
            <div className="skills-items">NODE JS</div>
            </div>
             <div className="third-row" data-aos="slide-right"> 
             <div className="skills-items">MONGODB Basic</div>
            
            <div className="skills-items " data-aos="slide-right">SQL Basic</div>
            </div>
            <div className="fourth-row"><div className="skills-items adjustment" data-aos="slide-left">RESPONSIVE WEB</div>
            </div>
            </div>  
            
        </div>
  </div></>
    
  
}

export default Skills