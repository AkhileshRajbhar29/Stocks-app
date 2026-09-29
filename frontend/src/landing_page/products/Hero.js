import React from 'react'

const Hero = () => {
  return (
    <div className='container border-bottom mb-5'>
      <div className='text-center mt-5 p-3'>
        <h1>Technology</h1>
        <h3 className='text-muted mt-3 fs-4'>
          Modern, simple and intuitive trading platform
        </h3>
        <p>
          Explore the technology and features that power TradeX. Our platform is designed to provide a clean and convenient experience for exploring markets, managing your portfolio, and understanding trading tools.
        </p>
        <p className='mt-3 mb-5'>
          Check out our{" "}
          <a href='' style={{textDecoration:"none"}}>product features{" "}
            <i className='fa fa-long-arrow-right' aria-hidden="true"> </i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;