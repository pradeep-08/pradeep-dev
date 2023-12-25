import React, { useEffect } from 'react';
import '../styles/projects.css';
import Logo from '../../images/remove-laptop-clone.jpg';
import Logo1 from '../../images/document-maker.jpg';
import Logo2 from '../../images/e-comme.jpg';
import Logo3 from '../../images/mini-projects.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Projects() {
  useEffect(()=>{
    AOS.init({duration:3000});
  },[]);
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }; 
  return <><div className='div-main-projects' id='projects'>
  <div className="projects"><div className="head">Projects</div></div>
  <div className="main-container-div">
    <div className="first-div">
      <img  data-aos="flip-down" className='laptop-image' src={Logo} alt="" />
    </div>
    
    <div className="second-div"  ><span data-aos="fade-up" >Excited to share my HTML and CSS  – YouTube clone using only HTML and CSS!  Designed a slick layout with a cool header and a  detailed video content. Nailed the YouTube vibes with thumbnails and icons.
     
    Responsive design ensures a smooth experience on any device. Check it out on GitHub Pages to see what I've created!.</span>
           <div className="button-div1"><div className="button1"><button onClick={() => openInNewTab('https://pradeep-08.github.io/youtube-clone-pradeep/')}  className='project-button1'>LINK</button></div></div></div>
    
  </div>
  <div className="main-container-div  main-container-div-responsive">
  
  <div className="second-div1" > <span data-aos="fade-up" >Meet the Personalized Document Maker—your go-to tool for making documents super easy.  
          It's easy to use, works on phones and computers, and you can share your work with others. Plus, it keeps your stuff safe. Make documents your way with this easy and friendly project!</span>
          <div className="button-div1"><div className="button1"><button onClick={() => openInNewTab('https://pradeep-08.github.io/testing-project/ ')}  className='project-button1'>LINK</button></div></div></div>
    <div className="first-div">
      <img data-aos="flip-down" className='laptop-image' src={Logo1} alt="" />
      
    </div>
  </div>
  <div className="main-container-div">
    <div className="first-div">
      <img data-aos="flip-down" className='laptop-image' src={Logo2} alt="" />
    </div>
    
    <div className="second-div" data-aos="fade-up"> <span data-aos="fade-up" >Explore our user-friendly shopping website, built with React, now featuring a handy search filter! Easily find what you're looking for by typing keywords into the search bar. 
    With React's quick performance, browsing and filtering products is a breeze. Enjoy a seamless shopping experience with the added convenience of our new search feature.  </span> 
    <div className="button-div1"><div className="button1"><button  onClick={() => openInNewTab('https://pradeep-08.github.io/Dark-cart-front/')} className='project-button1'>LINK</button></div></div></div>
  </div>
  <div className="main-container-div  main-container-div-responsive ">
  
  <div className="second-div1" data-aos="fade-up"> <span data-aos="fade-up" >Check out my projects! I've crafted a user-friendly calculator for basic math, a music player with play, pause, and skip features, a straightforward digital clock for precise timekeeping, a visually appealing landing page, and now, a QR code generator app. Whether you're crunching numbers, 
  enjoying tunes, tracking time, exploring a landing page, or generating QR codes, these projects showcase my coding journey. </span> 
    <div className='button-mini'>
    <div className="button-div1"><div className="button1"><button  onClick={() => openInNewTab('https://pradeep-08.github.io/Calculator/')} className='project-button1'>Calculator</button></div></div>
    <div className="button-div1"><div className="button1"><button onClick={() => openInNewTab('https://musicplayer-pradeep.netlify.app/')} className='project-button1'>Music player</button></div></div>
    <div className="button-div1"><div className="button1"><button onClick={() => openInNewTab('https://pradeep-08.github.io/Digital-Clock/')} className='project-button1'>Digital Clock</button></div></div>
    <div className="button-div1"><div className="button1"><button onClick={() => openInNewTab('https://pradeep-08.github.io/comming-soon/')} className='project-button1'>Maintanace page</button></div></div>
    <div className="button-div1"><div className="button1"><button onClick={() => openInNewTab('https://pradeep-08.github.io/qr-code-gen/')} className='project-button1'>QR-Code-Gen</button></div></div>
    </div>
    
    </div>
    
    <div className="first-div">
      <img data-aos="flip-down" className='laptop-image' src={Logo3} alt="" />
      
    </div>
  </div>
</div></>
    
  
}

export default Projects