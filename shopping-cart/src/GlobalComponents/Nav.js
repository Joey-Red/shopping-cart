import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style.css'

export default function Nav() {
  let displayNav = () => {
    let navLinks = document.querySelector('.nav-link-list');
    if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
  }
  return (
    <>
      <div className='faBars'>
        <FontAwesomeIcon icon={faBars} onClick={displayNav}/>
      </div>
      <div className='nav-link-list'>
          <ul className='nav-list'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Policy</li>
          </ul>
      </div>
    </>
  )
}
