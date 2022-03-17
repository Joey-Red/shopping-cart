import React from 'react'
function HomeProduct(props) {
  const { homeProduct, onAdd } = props;
  return (
    <div className='shop-card-container home-card-container'>
      <div className='grid-item'>
        <h4>{homeProduct.name}</h4>
        <div className='showButton'>
          <button className='atcButton' onClick={()=>onAdd  (homeProduct)}>Add To Cart</button>
        </div>
        <img src={homeProduct.image} alt={homeProduct.name}></img>
        <div className='price'>${homeProduct.price}</div>
      </div>
    </div>
  )
}
export default HomeProduct