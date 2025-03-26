import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout';

const Navbar = () => {
    return (
     
        <header>
        
        <div className = 'container-fluid d-flex align-items-center  text-center justify-content-between'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 w-100">
      <NavLink  className="navbar-brand" to="/">Navbar</NavLink> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink  className="nav-link" to="/">Home</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to ="/products">Products</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to ="/user">Users</NavLink> 
          </li>
         
        
        </ul>
        <div><Logout/></div>
      </div>
     
    </nav>
    </div>
    </header>
    
     
  
    )
  }
  export default Navbar;