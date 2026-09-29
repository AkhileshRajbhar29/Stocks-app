import React from 'react'

const Award = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 mt-5 p-4'>
                <img src="media/images/largest-broker.jpg" style={{height:"100%", width:"100%"}}/>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>A modern platform for smart investing</h1>
                <p className='mb-5'>2+ million TradeX users access a wide range of market opportunities across</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Equity & Stocks</p>
                            </li>
                            <li>
                                <p>Futures & Options</p>
                            </li>
                        
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Commodity Markets</p>
                            </li>
                            <li>
                                <p>Currency Markets</p>
                            </li>
                             
                        </ul>
                    </div>

                </div>
                <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
            </div>

        </div>
    </div>
  );
}

export default Award;