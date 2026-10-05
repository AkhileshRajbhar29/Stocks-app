import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <div className='container-fluid'>
        <div className='row hero-heading border-bottom text-center'>
            <h1>Charges</h1>
            <h3 className='text-muted mt-3 fs-5'>Simple and transparent pricing</h3>
        </div>

        <div className='row p-5 mt-5 text-center pricing-cards-row'>
            <div className='col-4 pricing-card'>
                <img src="/media/images/equitydelivery.svg" alt="Equity Delivery" className='pricing-card-img' />
                <h3 className='mt-3'>Equity Delivery</h3>
                <h5>₹0 Brokerage</h5>
                <p className='text-muted mt-4'>No brokerage is charged on equity delivery transactions in this project.</p>
            </div>

            <div className='col-4 pricing-card'>
                <img src="/media/images/intradayinfo.svg" alt="Intraday and F&O" className='pricing-card-img' />
                <h3 className='mt-3'>Intraday & F&O</h3>
                <h5>₹20 or 0.03% — whichever is lower</h5>
                <p className='text-muted mt-4'>A simple flat-rate pricing model for intraday and F&O transactions, as configured in the TradeX project.</p>
            </div>

            <div className='col-4 pricing-card'>
                <img src="/media/images/mutalfunds.svg" alt="Mutual Funds" className='pricing-card-img' />
                <h3 className='mt-3'>Mutual Funds</h3>
                <h5>₹0 Commission</h5>
                <p className='text-muted mt-4'>TradeX keeps mutual fund investing simple with no commission charges in this project.</p>
            </div>
            </div>
        <div>
            <p className='Note'>
                <b>Note:</b> The charges shown above are part of the TradeX project/demo and should not be considered actual brokerage or financial-service pricing.
            </p>
        </div>
    </div>
  )
}

export default Hero;