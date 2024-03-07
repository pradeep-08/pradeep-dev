import React, { useEffect } from 'react';
import '../styles/end.css';
import Logo from '../../images/svg.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'
function End() {
  useEffect(()=>{
    AOS.init({duration:3000});
  },[]); 
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return  <>  
            <div className="main-end-container">
            <div className="name-div1">
            <div  data-aos="fade-right" className="end-name">Pradeep</div>
            <div className="end-descriptions"  data-aos="fade-up">A Frontend focused Web Developer building the Frontend of Websites 
            and Web Applications that leads to the success of the overall product. </div>
            </div>
           <div className="social-descriptions">
                <div className="social"><div>Social</div></div>
                <div className="qr-image-div"> <img  data-aos="flip-right" className='image-qr' src={Logo} alt="" /></div>
               
                <div className="social-icons">
                <img  className='email-icon' onClick={() => openInNewTab('https://www.linkedin.com/in/pradeep-t-1b97491aa/')} width="28" height="28" src="https://img.icons8.com/color/68/linkedin.png" alt="linkedin"/>
                <img className='email-icon' onClick={() => window.location = 'mailto:pradeep.tasp.0802@gmail.com'} width="28" height="28" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
                <img className='email-icon' onClick={() => openInNewTab('https://github.com/pradeep-08')}  width="28" height="28" src="https://img.icons8.com/officel/48/github.png" alt="github"/>
                
                </div>
                
                </div> 
               
                <div class="copyright">Handcrafted by me <span class="icon has-white-text"> <img width="20" height="20" src="https://img.icons8.com/color/48/copyright--v1.png" alt="copyright"/> </span> twentytwentyfour</div>
            </div>


              
        
  </>

}

export default End