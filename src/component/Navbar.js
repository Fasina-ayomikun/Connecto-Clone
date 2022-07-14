import React from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../images/logo-white.png";
function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <Link to='/'>
          <img src={image} alt='connecto' />
        </Link>
        <div className='nav-contents'>
          <ul className='nav-links'>
            <li className='nav-link'>
              <NavLink to='/destination' activeclassname='active-nav'>
                Destinations
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/faq' activeclassname='active-nav'>
                FAQ
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/partners' activeclassname='active-nav'>
                Partner
              </NavLink>
            </li>
            <div className='hrs'>
              <hr className='top-hr' />
              <hr className='bottom-hr' />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
