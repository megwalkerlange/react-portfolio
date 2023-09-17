import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Projects from './components/pages/projects'
import Contact from './components/pages/contact'
import Welcome from './components/pages/welcome'
import Navbar from './components/navbar'
import './components/NavTabs'

function App() {
  

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
       <Route path ='Welcome' element ={<Welcome />} />
       <Route path ='Projects' element ={<Projects />} />
       <Route path ='Contact' element ={<Contact />} />
       </Routes> 

</div>
<>
</>

   </Router>

  )
}

export default App
