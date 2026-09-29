import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid' id="supportHero">
        <div className='p-5' id="supportWrapper">
            <h4>TradeX Support </h4>
            <a>Track Tickets</a>
        </div>
        <div className='row p-5 m-3'>
            <div className="col-6 p-3">
                <h3 className='fs-5'>Search for an answer or browse our help topics to find useful information about TradeX, your account, trading features, and platform usage.</h3>
                <input placeholder='Eg. how do I active F&O'/><br/>
                <a href='' className='me-4'>Account & Registration</a>
                <a href='' className='me-4'>Login & Account Access</a>
                <a href='' className='me-4'>Trading & Orders</a>
                <a href='' className='me-4'>Portfolio & Holdings</a>
                <a href='' className='me-4'>Charges & Pricing</a>
                <a href='' className='me-4'>Platform & Technical Support</a>
            </div>
            <div className="col-6 p-3">
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li><a href=''>Getting Started with TradeX</a><br/></li>
                    <li><a href=''>Understanding Orders & Portfolio </a></li>
                </ol>
                 
                
            </div>
        </div>
    </section>
  )
}

export default Hero;