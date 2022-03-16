import React from 'react';
import Dino from '../img/dino.jpg';
import Duck from '../img/duck.jpg';
import Gameboy from '../img/gameboy.jpg';
import Owl from '../img/owl.jpg';
import Sheep from '../img/sheep.jpg';
import Walle from '../img/walle.jpg';
import "../style.css"

export default function BodyComponent() {
  return (
    <div className='body-component'>
      <div className='card'>
        <h4>Dinosaur Toy</h4>
        <img src={Dino} alt="Dinosaur Toy" />
      </div>
      <div className='card'>
        <h4>Duck Toy</h4>
        <img src={Duck} alt="Duck Toy" />
      </div>
      <div className='card'>
        <h4>Gameboy</h4>
        <img src={Gameboy} alt="Gameboy" />
      </div>
      <div className='promote-banner'>
        <h1>Featured Items</h1>
      </div>
      <div className='card'>
        <h4>Owl Toy</h4>
        <img src={Owl} alt="Owl Toy" />
      </div>
      <div className='card'>
        <h4>Sheep Toy</h4>
        <img src={Sheep} alt="Sheep Toy" />
      </div>
      <div className='card'>
        <h4>Toy Wall-E</h4>
        <img src={Walle} alt="Wall-E Toy" />
      </div>
    </div>
  )
}
