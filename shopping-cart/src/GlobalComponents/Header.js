import React from 'react';
import Nav from './Nav';

export default function Header(props) {
  const { cartItems, onAdd } = props;
  return (
    <div className="header">
      <Nav/>
      <h1>Toys N' Trinkets Webshop</h1>
    </div>
  )
}
