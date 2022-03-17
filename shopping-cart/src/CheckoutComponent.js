import React from 'react'

function CheckoutComponent(props) {
  const {cartItems} = props;
  return (
    <div>
      <h4>Your cart:</h4>
      {cartItems.map((item)=> (
        <div key={item.id}>
        <div>{item.name}</div>
        <div>{item.price}</div>
    </div>
    ))}
    </div>
  )
}

export default CheckoutComponent