import './App.css'

import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Support from './Pages/Support';
import Platforms from './Pages/Platforms';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';

const App = () => {
  return (
    <Router>
      <NavBar/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/platforms' element={<Platforms/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>       
        
        
      </Routes> 

      <Footer/>     
    </Router>
  )
}

export default App;





