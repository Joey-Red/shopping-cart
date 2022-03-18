import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function ShoppingCart(props) {
  const { cartItems, onAdd } = props;
  return (
    <div className='cart-container'>
      <div id="cart">{cartItems.length}</div>
      <div className='faCart'>
        <Link to="/checkout"><FontAwesomeIcon icon={faCartShopping} /></Link>
      </div> 
    </div>
  )
}
