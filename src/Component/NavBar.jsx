import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function NavBar({Pembuka_Contact, Contact1, Contact2, Email, Alamat, Icon}) {
  return (
<div className="top_nav__menu">
        
        <Link to="/app" title="Home">
          Home
        </Link>
        <Link to="/review-page" title="Recipe">
          Recipe
        </Link>
        <Link to="/join-us" title="Join Us">
          Joinn Us!!!
        </Link>
        
  </div>

  );
}

export default NavBar;
