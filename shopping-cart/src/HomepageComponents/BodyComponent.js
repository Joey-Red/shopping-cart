import React from 'react';
import HomeProduct from '../ShopComponents/HomeProduct';
import "../style.css";

export default function BodyComponent(props) {
  const { homeProducts, onAdd } = props;

  return (
    <>
    {homeProducts.map((homeProduct) => (
        <HomeProduct key={homeProduct.id} homeProduct={homeProduct} onAdd={onAdd} />
      ))}
    </>
  )
}
