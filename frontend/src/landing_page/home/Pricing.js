import React from 'react'
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className='row pricing-container'>
        <div className='col-4'>
          <h1 className='mb-3 fs-2'>Transparent Pricing</h1>
          <p>We believe investing should be simple and affordable. TradeX offers clear, competitive pricing with no confusing charges or hidden surprises. Know exactly what you pay, so you can invest with confidence.</p>
          <a style={{textDecoration:"none"}}>See Pricing
            <i className='fa fa-long-arrow-right' aria-hidden="true"></i>
          </a>
        </div>

        <div className='col-2'></div>
          <div className='col-6'>
            <div className='row text-center'>
              <div className='col p-3 border'>
                <h1 className='mb-3'>₹0</h1>
                <p>Account opening <br/> No charges for getting started</p>
              </div>
              <div className='col p-3 border'>
                <h1 className='mb-3'>₹0</h1>
                <p>Market learning <br/> Access educational resources and trading tools</p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Pricing;