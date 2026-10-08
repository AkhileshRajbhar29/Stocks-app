import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='container-fluid'>
        <div className='row text-center heroContainer'>
            <img src="media/images/dashboard.png" alt="Hero_Image" className='mb-5'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online plateform to invest in stocks, derivatives, mutual funds and more</p>
            <button className='p-3 btn fs-5' signup-button style={{width:"330px", margin:"0 auto", backgroundColor:"#00C896", color:"#06121F", fontWeight:"500"}}>Signup Now</button>
        </div>

    </div>
  );
}

export default Hero;