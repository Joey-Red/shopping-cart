import React from 'react';
import Nav from './Nav';
import ShoppingCart from './ShoppingCart';

export default function Header() {
  return (
    <div className="header">
      <Nav/>
      <h1>Toys N' Trinkets Webshop</h1>
      <ShoppingCart/>
    </div>
  )
}
