import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart() {
  return (
    <div className='cart-container'>
      <p>0</p>
      <div className='faCart'>
        <FontAwesomeIcon icon={faCartShopping} />
      </div> 
    </div>
  )
}
