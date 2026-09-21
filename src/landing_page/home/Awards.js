import React from 'react'

const Award = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 mt-5'>
                <img src="media/images/largestBroker.svg"/>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>Largest Stock broler in India</h1>
                <p className='mb-5'>2+ million Zerodha client cintribute to over 15% of All</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
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