import React from 'react'

const Education = () => {
  return (
    <>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
           <img src="media/images/education2.png" style={{width:"70%"}}/>
        </div>

        <div className='col-6'>
              <h1 className='mb-3 fs-2'>Learn. Explore. Grow.</h1>
              <p>TradeX makes market learning simple and accessible. Explore useful resources covering investing basics, market concepts, trading strategies, and financial knowledge—all designed to help you make more informed decisions.</p>
              <a href="" style={{textDecoration:"none"}}>Explore Learning
              <i className='fa ga-long-arrow-right'></i>
              </a>

              <p className='mt-5'>Connect with other traders and investors, share ideas, discuss market concepts, and learn from different perspectives.</p>
              <a href='' style={{textDecoration:"none"}}>Join the Community
                <i className='fa fa-long-arroe-right'></i>
              </a>
              </div>
            </div>
          </div>
    </>
  );
}

export default Education;