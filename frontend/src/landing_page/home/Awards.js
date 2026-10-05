 import React from 'react';
import './Award.css';

const Award = () => {
  return (
    <div className='container-fluid py-5'>
      <div className='row modern-plateform-container'>
        <div className='col-6 p-4 image-div'>
          <img src="/media/images/largest-broker.jpg" alt="Largest broker" className='award-img' />
        </div>

        <div className='col-6 text-content mt-3'>
          <h1>A modern platform for smart investing</h1>
          <p className='mb-5'>2+ million TradeX users access a wide range of market opportunities across</p>

          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Equity & Stocks</p></li>
                <li><p>Futures & Options</p></li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li><p>Commodity Markets</p></li>
                <li><p>Currency Markets</p></li>
              </ul>
            </div>
          </div>

          <img src="/media/images/pressLogos.png" alt="Press logos" className='award-press-img' />
        </div>
      </div>
    </div>
  );
}

export default Award;