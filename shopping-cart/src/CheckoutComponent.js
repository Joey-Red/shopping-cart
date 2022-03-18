import React from 'react'

function CheckoutComponent(props) {
  const {cartItems} = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  return (
    <div className='checkout-cart'>
      <ul className='checkout-item-list'>
        <h4 className='checkout-header'>Your cart:</h4>
        {cartItems.map((item)=> (
        <li key={item.id}>
          <li className='name-value'>{item.name}</li>
          <li className='price-value'>${item.price}</li>
        </li>
    ))}
    </ul>
    <div className="checkout-total">
      <p className='checkout-header'>Checkout Total:</p>
      <p className='total-price-value'>${totalPrice}</p>
    </div>
    </div>    
  )
}

export default CheckoutComponent