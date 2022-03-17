import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import FooterComponent from "./GlobalComponents/FooterComponent";
import Header from "./GlobalComponents/Header";
import BodyComponent from "./HomepageComponents/BodyComponent";
import ShopBodyComponent from "./ShopComponents/ShopBodyComponent"
import productData from "./ShopComponents/productData";
import homeProductData from './ShopComponents/homeProductData'
import CheckoutComponent from "./CheckoutComponent";
import ShoppingCart from "./GlobalComponents/ShoppingCart";
const RouteSwitch = () => {
  const { products } = productData;
  const { homeProducts } = homeProductData;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log(cartItems)
      const exist = cartItems.find(x => x.id === product.id);
      if(exist){
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1 } : x)
        )
      } else {
        setCartItems([...cartItems, {...product, qty: 1}])
      }
    }
  return (
    <BrowserRouter>
      <Header />
      <div className="shopping-cart-icon">
        <ShoppingCart onAdd={onAdd} cartItems={cartItems} products={products} homeProducts={homeProducts}/>
      </div>
      <Routes>
        <Route path="/" element={<BodyComponent products={products} homeProducts={homeProducts} onAdd={onAdd}/>} />
        
        <Route path="/shop"  element={<ShopBodyComponent products={products} homeProducts={homeProducts} onAdd={onAdd} />} />
        <Route path="/checkout" element={<CheckoutComponent products={products} homeProducts={homeProducts} cartItems={cartItems}/>} />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
};
export default RouteSwitch;