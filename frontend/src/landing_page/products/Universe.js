import React from 'react'
import "./Universe.css";

const Universe = () => {
  return (
    <div className='container-fluid'>
        <div className='row mt-5 Universe-container'>
            <h1>The TradeX Ecosystem</h1>
            <p className='mb-0 mt-3 p1'>
                Explore the different features of TradeX designed to bring trading, portfolio management, market exploration, and financial learning together in one platform.
            </p>
            <p className='p2'>
                Our goal is to create a simple and connected experience where users can explore the market, manage their portfolio, and learn about investing through modern technology.
            </p>
             
            <div className='col-4 p-3 mt-5 product-card'>
                <img src="media/images/zerodhaFundhouse.png" className='product-logo'/>
                <p>
                    Our asset management venture <br/> that is creating simple and transparent index funds <br/> to help you save for your goals.
                </p>
                
            </div>
            <div className='col-4 p-3 mt-5 product-card'>
                <img src="media/images/sensibullLogo.svg" className='product-logo'/>
                <p className='text-small text-muted'>
                    Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.
                </p>
            </div>
            <div className='col-4 p-3 mt-5 product-card'>
                <img src="media/images/goldenpiLogo.png" className='product-logo'/>
                <p className='text-small text-muted'>
                    Our asset management venture <br/> that is creating simple and transparent index funds <br/> to help you save for your goals.
                </p>
            </div>
            <div className='col-4 p-3 mt-5 product-card'>
                <img src="media/images/streakLogo.png" className='product-logo'/>
                <p className='text-small text-muted'>
                    <p class="text-12 text-light-grey">Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
                </p>
            </div>
            <div className='col-4 p-3 mt-5 product-card'>
                <img src="media/images/smallcaseLogo.png" className='product-logo'/>
                <p className='text-small text-muted'>
                    Themetic Investing plateform that helps you invest in diversfied breakfast of stocks on ETFs.
                </p>
            </div>
            <div className='col-4 p-3  mt-5 product-card'>
                <img src="media/images/dittoLogo.png" className='product-logo'/>
                <p class="text-12 text-light-grey">Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
            </div>
            <button className='p-3 btn fs-5' signup-button style={{width:"330px", margin:"0 auto", backgroundColor:"#00C896", color:"#06121F", fontWeight:"500"}}>Signup Now</button>
        </div>
    </div>
  )
}

export default Universe;