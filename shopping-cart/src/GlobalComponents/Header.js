import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { cartItems, onAdd } = props;
  return (
    <div className="header">
      <Nav/>
      <Link to="/"><h1>Toys N' Trinkets Webshop</h1></Link>
    </div>
  )
}
