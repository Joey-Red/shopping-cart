import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style.css';
import { Link } from 'react-router-dom';

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
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/checkout"><li>Checkout</li></Link>
            <li>FAQ</li>
            <li>Policy</li>
          </ul>
      </div>
    </>
  )
}
