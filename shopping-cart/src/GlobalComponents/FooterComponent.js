import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterComponent() {
  return (
    <div className='FooterComponent'>
      <ul className='link-list'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/checkout"><li>Checkout</li></Link>
        <li>FAQ</li>
        <li>Policy</li>
      </ul>
    </div>
  )
}
