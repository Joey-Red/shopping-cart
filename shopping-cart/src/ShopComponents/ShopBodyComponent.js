import React from 'react';
import '../style.css';
import Product from './Product';

export default function ShopBodyComponent(props) {
  const { products, onAdd } = props;
  return (
    <div className='home-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  )
}
