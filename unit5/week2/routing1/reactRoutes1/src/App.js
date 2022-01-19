import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Contact } from './Components/Navbar/ContactPage';
import { Home } from './Components/Navbar/HomePage';
import { Services } from './Components/Navbar/ServicesPage';
import { About } from './Components/Navbar/AboutPage';
import { Login } from './Components/Navbar/LoginPage';
import Navbar from './Components/Navbar/index';

const navbar = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto'
  
}
 
function App() {
  return (
    <div style={navbar}>
    <BrowserRouter>
      <Navbar/>
      <Route exact path='/'><Home /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/services'><Services /></Route>
      <Route path='/about-us'><About /></Route>
      <Route path='/contact'><Contact/></Route>
      </BrowserRouter>
      </div>
  )
}

export default App
