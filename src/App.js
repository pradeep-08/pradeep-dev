import './App.css';

import Nav from './assets/componets/nav';
import Intro from './assets/componets/intro';
import Second from './assets/componets/second';
import Skills from './assets/componets/skills';
import Projects from './assets/componets/projects';
import Certification from './assets/componets/certifications';
import Contact from './assets/componets/contact';
import End from './assets/componets/end';


function App() {
  return (
    <div className="App">
    
    <Nav /> 
    
  
    <Intro />
     <Second/>
    
   <Skills />
     <Projects />
    <Certification />
    <Contact />
   <End/>
    </div>
  );
}

export default App;
