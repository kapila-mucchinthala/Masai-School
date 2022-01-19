import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to='/Home'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/services'>Services</Link>
      <Link to='/about-us'>About</Link>
      <Link to='/contact'>Contact</Link>
    </>
  )
}

export default NavBar
