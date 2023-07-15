import React from 'react'
import Home from './component/Home'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import About from './component/About'
import Contact from './component/Contact'
import Explorefoods from './component/Explorefoods'
import './App.css';

import{ BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
     <div>
  
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="/explorefoods" element={<Explorefoods/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>

     </div>
    
  )
}



export default App


