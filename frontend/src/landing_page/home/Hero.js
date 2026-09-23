import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
        <div className='row text-center'>
            <img src="media/images/Dashboard.jpg" alt="Hero image" className='mb-5'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online plateform to invest in stocks, derivatives, mutual funds and more</p>
            <button className='p-3 btn btn-primary fs-5' style={{width:"25%", margin:"0 auto "}}>Signup Now</button>
        </div>

    </div>
  );
}

export default Hero;