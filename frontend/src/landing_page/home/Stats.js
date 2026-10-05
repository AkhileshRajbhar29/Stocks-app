import React from 'react'
import "./Stats.css"

const Stats = () => {
  return (
    <div className='container-fluid'>
      <div className='row bothColumn'>
        <div className='col-6 p-4'>
          <h1 className='fs-2 mb-2'>Smart investing, built around you</h1>

          <h2 className='fs-4'>Customer-focused by design</h2>
          <p className='text-muted'>Investing should be simple, transparent and built around your needs.</p>

          <h2 className='fs-4'>Simple experience, no distractions</h2>
          <p className='text-muted'>No pop-ups or spam, just a clean platform to focus on your markets.</p>

          <h2 className='fs-4'>A complete trading ecosystem</h2>
          <p className='text-muted'>Research, insights, tracking and trading tools together in one place.</p>

          <h2 className='fs-4'>Make smarter financial decisions</h2>
          <p className='text-muted'>Portfolio insights and market alerts to help you manage your money better.</p>
        </div>

        <div className='col-6 ecosystem-img-div'>
          <img src='/media/images/ecosystem.svg' alt='TradeX ecosystem' className='smart-investing-img'/>
        </div>
      </div>
    </div>
  );
}

export default Stats;




// import React from 'react';
// import './Stats.css';

// const Stats = () => {
//   return (
//     <div className='container-fluid px-5 stats-section'>
//       <div className='row bothColumn'>
//         <div className='col-6 stats-text'>
//           <h1 className='fs-2 mb-2'>Smart investing, built around you</h1>

//           <h2 className='fs-4'>Customer-focused by design</h2>
//           <p className='text-muted'>Investing should be simple, transparent and built around your needs.</p>

//           <h2 className='fs-4'>Simple experience, no distractions</h2>
//           <p className='text-muted'>No pop-ups or spam, just a clean platform to focus on your markets.</p>

//           <h2 className='fs-4'>A complete trading ecosystem</h2>
//           <p className='text-muted'>Research, insights, tracking and trading tools together in one place.</p>

//           <h2 className='fs-4'>Make smarter financial decisions</h2>
//           <p className='text-muted'>Portfolio insights and market alerts to help you manage your money better.</p>
//         </div>

//         <div className='col-6 stats-image'>
//           <img src='/media/images/ecosystem.svg' alt='TradeX ecosystem' className='stats-img' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;