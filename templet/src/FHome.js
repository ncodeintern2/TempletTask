import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './compoment/Footer'
import Header from './compoment/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Service from './compoment/Home/Service';


function FHome(props) {
 
  return (
    <div>
      <Header setIslogged={props.setIslogged}/>

      <Routes>

        
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/gellary' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default FHome;
