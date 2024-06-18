import React from 'react';
import { Link } from 'react-scroll';
import '../styles/nav.css';
import Logo from '../../images/web-developer.1004x1024.png';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function nav() {
  const onButtonpradeep-resume.pdfClick = () => {
    const pdfUrl = "pradeep-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "pradeep-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const Notify = ()=>{
        toast.success("Resume Downloaded" , {
            position : toast.POSITION.TOP_LEFT
        });
      }
  return <>
    <div className="nav-bar">
      <div className="nav-containers">
        <div className="pro-img">
          <img className='logo-image' src={Logo} alt="" />
        </div>
        <div className="logo-name"> Pradeep . </div>
      </div>
       <div className="nav-container-two">

       
    
       <ToastContainer />
       <Link to='intro' smooth={true} offset={50} duration={1500}> <div className="nav-items" >Home</div></Link> 
          <Link to='about' smooth={true} offset={-50} duration={1500}> <div className="nav-items" >About</div></Link> 
          <Link to='projects' smooth={true} offset={-20} duration={1500}><div className="nav-items">Projects</div></Link> 
        <Link to='page' smooth={true} offset={-20} duration={1000}><div className="nav-items">Contact</div></Link> 
        <button onClick={onButtonClick} className="resume" ><span onClick={e=> Notify()}>My Resume</span></button>
      </div>
    </div>
  </>
    
  
}

export default nav
