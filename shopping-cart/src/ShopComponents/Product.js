import React from 'react'
function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='shop-card-container'>
      <h4>{product.name}</h4>
      <div className='showButton anotherButtonStyle'>
        <button  className='atcButton' onClick={()=>onAdd(product)}>Add To Cart</button>
      </div>
      <img src={product.image} alt={product.name}></img>
      <div className='price anotherButtonStyle'>${product.price}</div>
    </div>
  )
}
export default Product


