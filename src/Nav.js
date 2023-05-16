import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <>
      <nav className='navbar'>
          <div className='logo'>
            <img src='#' alt='logo'></img>
          </div>
          <div className='menu'>
            <ul className='nav-link'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
            <div className='hamburger'>
                <a href='#'>
                  <GiHamburgerMenu />
                </a>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Nav