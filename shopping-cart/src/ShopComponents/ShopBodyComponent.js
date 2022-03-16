import React from 'react';
import '../style.css';
import Dbz from '../img/dbz.jpg';
import Doll from '../img/doll.jpg';
import ElectronicToy from '../img/electronictoy.jpg';
import Plush from '../img/plush.jpg';
import Puzzle from '../img/puzzle.jpg';
import Rc from '../img/rc.jpg';
import Couple from '../img/couple.jpg';

export default function ShopBodyComponent() {
  return (
    <>
      <div className='searchBar'>
        <label htmlFor="search"></label>
        <input type="text" name="search" placeholder="Search" />
        <button>Enter</button>
      </div>
      <div className='table-of-contents'>
        <ul className='shopList'>
          <h3>Select Category</h3>
          <li><a href="#rc">Cars and Radio Controlled</a></li>
          <li><a href="#electronics">Electronics</a></li>
          <li><a href="#plushie">Plushies</a></li>
          <li><a href="#actionFigure">Action Figures</a></li>
          <li><a href="#doll">Dolls</a></li>
          <li>Games - (out of Stock)</li>
          <li>Model Building - (out of Stock)</li>
          <li>Educational - (out of Stock)</li>
          <li><a href="#puzzle">Puzzle</a></li>
          <li>Wooden - (out of Stock)</li>
        </ul>
        <p className='welcome-message'>Thank you for visiting our Webshop. For further inquiries call 821-934-9829</p>
        <img src={Couple} alt="couple" id="couple"/>
      </div>
      <div className='shop-card-container'>
        <div className='shop-card'>
          <h4>Goku Action Figure</h4>
          <img src={Dbz} alt="Goku toy" id="actionFigure"/>
        </div>
        <div className='shop-card'>
          <h4>Electronic Toy</h4>
          <img src={ElectronicToy} alt="Electronic Toy" id="electronics"/>
        </div>
        <div className='shop-card'>
          <h4>Doll</h4>
          <img src={Doll} alt="Doll" id="doll"/>
        </div>
        <div className='shop-card'>
          <h4>Plush Toy</h4>
          <img src={Plush} alt="Plush" id="plushie"/>
        </div>
        <div className='shop-card'>
          <h4>Puzzle</h4>
          <img src={Puzzle} alt="Puzzle" id="puzzle"/>
        </div>
        <div className='shop-card'>
          <h4>RC Car</h4>
          <img src={Rc} alt="RC" id="rc" />
        </div>
      </div>
    </>
  )
}
