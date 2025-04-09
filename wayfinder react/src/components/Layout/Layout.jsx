import React from 'react';
import { useLocation } from "react-router-dom";
import './Layout.css'
import NavBar from '../Navbar/NavBar';

const Layout = ({children}) => {

  const location = useLocation();
  const hideNavBar = location.pathname === '/form';

  console.log(location.pathname)

  return(
    <div className="layout">
      {!hideNavBar && <NavBar/>}
      {children}
    </div>
  )
}

export default Layout
