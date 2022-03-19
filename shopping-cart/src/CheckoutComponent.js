import React from 'react'

function CheckoutComponent(props) {
  const {cartItems} = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  return (
    <div className='checkout-container'>
      <div className='checkout-cart'>
        <div className='checkout-item-list'>
          <h4 className='checkout-header'>Your cart:</h4>
          {cartItems.map((item)=> (
          <div key={item.id}>
            <div className='name-value'>{item.name}</div>
            <div className='price-value'>${item.price}</div>
          </div>
      ))}
      <div className="checkout-total">
        <p className='checkout-header'>Checkout Total:</p>
        <p className='total-price-value'>${totalPrice}</p>
        <button className='submit-button'>Submit Order</button>
      </div>
      </div>
      </div>
    </div>  
  )
}

export default CheckoutComponent