import React from 'react'

const Universe = () => {
  return (
    <div className='container'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>
                Extend your trading and investment experience even further with our partner platforms
            </p>
             
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{height:"60px", width:"200px"}}/>
                <p className='text-small text-muted'>
                    Our asset management venture <br/> that is creating simple and transparent index funds <br/> to help you save for your goals.
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{height:"60px", width:"200px"}}/>
                <p className='text-small text-muted'>
                    Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/goldenpiLogo.png" style={{height:"60px", width:"200px"}}/>
                <p className='text-small text-muted'>
                    Our asset management venture <br/> that is creating simple and transparent index funds <br/> to help you save for your goals.
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png" style={{height:"60px", width:"200px"}}/>
                <p className='text-small text-muted'>
                    <p class="text-12 text-light-grey">Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png" style={{height:"60px", width:"200px"}}/>
                <p className='text-small text-muted'>
                    Themetic Investing plateform that helps you invest in diversfied breakfast of stocks on ETFs.
                </p>
            </div>
            <div className='col-4 p-3  mt-5'>
                <img src="media/images/dittoLogo.png" style={{height:"60px", width:"200px"}}/>
                <p class="text-12 text-light-grey">Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
            </div>
            <button className='p-3 btn btn-primary fs-5' style={{width:"25%", margin:"0 auto "}}>Sign up Now</button>
        </div>
    </div>
  )
}

export default Universe;