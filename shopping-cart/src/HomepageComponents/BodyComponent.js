import React from 'react';
import HomeProduct from '../ShopComponents/HomeProduct';
import "../style.css";

export default function BodyComponent(props) {
  const { homeProducts, onAdd } = props;

  return (
    <div className='test-class'>
    {homeProducts.map((homeProduct) => (
      <div className='ind-card'>
        <HomeProduct key={homeProduct.id} homeProduct={homeProduct} onAdd={onAdd} />
        </div>
      ))}
    </div>
  )
}
