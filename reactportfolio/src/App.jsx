import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navtabs from './components/NavTabs'
import Projects from './components/pages/projects'
import Contact from './components/pages/contact'

import './components/NavTabs'

function Home() {
  

  return (
    <Router>
    <div>
     <Navtabs />
      <Routes>
       <Route path ='Home' element ={<Home />} />
       <Route path ='Projects' element ={<Projects />} />
       <Route path ='Contact' element ={<Contact />} />
       </Routes> 


<>
<section>
  <div className ="jumbotron">
    <h1>Megan Walker-Lange</h1>
    <p>Hi! Welcome to my portfolio page. Here you will be able to find out about my latest projects and work. I create apps and love to design things to look beautiful. If you would like to work with me please feel free to get in touch byt checking out the contact page. Links to My gutHub and LinkedIn can be found further down the page. </p>
  </div>
</section>
</>
</div>

   </Router>

  )
}

export default Home
