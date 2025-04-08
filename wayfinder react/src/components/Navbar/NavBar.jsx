import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
   <>
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className='link'>
          <span className='navbar-logo'>Wayfinder</span>
        </Link>
        <Link to="/" className='link'>
          <span className='plans'>Mes plans</span>
        </Link>
      </div>
    </nav>
  </>
  )
}

export default NavBar
