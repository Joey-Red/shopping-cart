import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import addToCart from './addToCart';

export default function ShoppingCart() {
  return (
    <div className='cart-container'>
      <p>{addToCart}</p>
      <div className='faCart'>
        <FontAwesomeIcon icon={faCartShopping} />
      </div> 
    </div>
  )
}
