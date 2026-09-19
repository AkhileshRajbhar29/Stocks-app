import React from 'react'

const Education = () => {
  return (
    <>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
           <img src="media/images/education.svg" style={{width:"70%"}}/>
        </div>

        <div className='col-6'>
              <h1 className='mb-3 fs-2'>Free and open market education</h1>
              <p>Varsity, the largest online stock market education book in the covering everuthing from the basics to advanced trading.</p>
              <a href="" style={{textDecoration:"none"}}>Versity
              <i className='fa ga-long-arrow-right'></i>
              </a>

              <p className='mt-5'>TradingQ&A, the most active trading and investment community</p>
              <a href='' style={{textDecoration:"none"}}>TradingQ&A
                <i className='fa fa-long-arroe-right'></i>
              </a>
              </div>
            </div>
          </div>
    </>
  );
}

export default Education;