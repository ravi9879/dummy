// import { BrowserRouter as Router, Routes, Route, Link , useLocation } from 'react-router-dom' ;  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;  
import Home from './files/Home.js' 
import About from './files/About.js'
import Project from './files/Project.js'
import Achievement from './files/Achievement.js'
import Education from './files/Education.js'
import Nav from './files/Nav.js'
import './files/Style.css'  
import Connect from './files/Connect.js'
import Feedback from './files/Feedback.js'
import * as React from 'react'



function App() {
  
  // React.useEffect(()=> {
  //   console.log(location.pathname) ;
  // } , [location]);

  return (
    <>
      <Router> 
        <Nav /> 
        <Routes>
          <Route path="/about" element={<About />}/>  
          <Route path="/education" element={<Education />}/>  
          <Route path="/project" element={<Project />}/>  
          <Route path="/achievement" element={<Achievement/>}/>  
          <Route path="/connect" element={<Connect />}/>  
          <Route path="/feedback" element={<Feedback />}/>  
          <Route path="/" element={<Home />}/> 
        </Routes>   
      </Router>   
    </>
  );
}

export default App ;
  