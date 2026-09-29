import React from 'react'

const Stats = () => {
  return (
    <div className='container p-3'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-2 mb-5'>Smart investing, built around you</h1>
          <h2 className='fs-4'>Customer-focused by design</h2>
          <p className='text-muted'>We believe investing should be simple, transparent, and built around your needs. TradeX gives you the tools and information you need to make informed decisions at your own pace.</p>
          <h2 className='fs-4'>Simple experience, no distractions</h2>
          <p className='text-muted'>No unnecessary pop-ups, spam, or distracting features. Just a clean and powerful platform designed to help you focus on the markets that matter to you.</p>
          <h2 className='fs-4'>A complete trading ecosystem</h2>
          <p className='text-muted'>TradeX brings research, market insights, portfolio tracking, and trading tools together in one connected ecosystem, so you can manage your investments without jumping between different platforms.</p>
          <h2 className='fs-4'>Make smarter financial decisions</h2>
          <p className='text-muted'>From portfolio insights and risk tracking to helpful market alerts, TradeX is designed not only to facilitate trades but also to help you understand and manage your money better.</p>
        </div>

        <div className='col-6 p-5'>
          <img src='media/images/ecosystem.svg' style={{width:"140%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Stats;