//  import React from 'react'
 
//  const CreateTicket = () => {
//    return (
//      <div className='container'>
//         <div className="row p-5 mt-5 mb-5">
//             <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
//             <div className='col-4 p-5 mt-2 mb-2'>
//                 <h4 className=' mt-5 fs-5 text-muted flex'>
//                     <i class="fa-solid fa-circle-plus" style={{color: "rgb(8, 8, 8)"}}></i>
//                     Account Opening
//                 </h4>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUV Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br/>
//             </div>

//             <div className='col-4 p-5 mt-2 mb-2'>
//                 <h4 className=' mt-5 fs-5 text-muted flex' >
//                     <i class="fa-solid fa-user" style={{color: "rgb(8, 8, 8)"}}></i>
//                     Your Zerodha Account
//                 </h4>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Login Credentials</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account Modification and Segment Addition</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUV Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>DP ID and bank detail</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
//             </div>

//             <div className='col-4 p-5 mt-2 mb-2'>
//                 <h4 className=' mt-5 fs-5 text-muted flex' >
//                     <i class="fa-solid fa-chart-simple" style={{color: "rgb(8, 8, 8);"}}></i>
//                     Your Zerodha Account
//                 </h4>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin/leverage, product and Order types</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Kid Web and Mobile</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate Actions</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Sentinel</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Kite API</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Pi and other plateform</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Stockreports</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>GTT</a><br/>

//             </div>
//             <div className='col-4 p-5 mt-2 mb-2'>
//                 <h4 className=' mt-5 fs-5 text-muted flex' >
//                     <i class="fa-regular fa-credit-card" style={{color: "rgb(125, 123, 128)"}}></i>
//                     Fund
//                 </h4>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUV Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br/>

//             </div>
//             <div className='col-4 p-5 mt-2 mb-2'>
//                 <h4 className=' mt-5 fs-5 text-muted flex' >
//                     <i class="fa-solid fa-circle-notch" style={{color: "rgb(125, 123, 128)"}}></i>
//                     Console
//                 </h4>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUV Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br/>

//             </div>
//             <div className='col-4 p-5 mt-2 mb-2'>
//                 <h4 className=' mt-5 fs-5 text-muted flex' >
//                     <i class="fa-regular fa-circle" style={{color: "rgb(125, 123, 128)"}}></i>
//                     Coin
//                 </h4>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUV Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
//                 <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br/>

//             </div>
//         </div> 
//      </div>
//    )
//  }
 
//  export default CreateTicket;


import React from 'react'

const CreateTicket = () => {
  return (
    <div className='container'>
      <div className="row p-5 mt-5 mb-5">

        <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className=' mt-5 fs-5 text-muted flex'>
            <i className="fa-solid fa-circle-plus" style={{color: "rgb(8, 8, 8)"}}></i>
            Account Opening
          </h4>

          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Create a New Account</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Complete Your Profile</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Individual Account Setup</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Business Account Setup</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Information</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account Charges</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Bank Account Linking</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br/>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className=' mt-5 fs-5 text-muted flex'>
            <i className="fa-solid fa-user" style={{color: "rgb(8, 8, 8)"}}></i>
            Your TradeX Account
          </h4>

          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Login & Password Help</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile Updates</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>KYC & Verification</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Bank Details</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Manage Your Account</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges & Fees</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer Holdings</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Security Settings</a><br/>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className=' mt-5 fs-5 text-muted flex'>
            <i className="fa-solid fa-chart-simple" style={{color: "rgb(8, 8, 8)"}}></i>
            Trading & Orders
          </h4>

          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Order Types</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin & Leverage</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Web & Mobile Platform</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Market Actions</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Price Alerts</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Developer API</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading Tools</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio Insights</a><br/>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className=' mt-5 fs-5 text-muted flex'>
            <i className="fa-regular fa-credit-card" style={{color: "rgb(125, 123, 128)"}}></i>
            Funds & Payments
          </h4>

          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add Funds</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw Funds</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Payment Methods</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transaction History</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Bank Verification</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Fund Transfer Limits</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Processing Time</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Payment FAQs</a><br/>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className=' mt-5 fs-5 text-muted flex'>
            <i className="fa-solid fa-circle-notch" style={{color: "rgb(125, 123, 128)"}}></i>
            Portfolio & Reports
          </h4>

          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio Overview</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profit & Loss Reports</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Tax Reports</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trade History</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account Statements</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Download Reports</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Performance Analysis</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Investment Insights</a><br/>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className=' mt-5 fs-5 text-muted flex'>
            <i className="fa-regular fa-circle" style={{color: "rgb(125, 123, 128)"}}></i>
            Investments
          </h4>

          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Stocks</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual Funds</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>ETFs</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO Information</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Long-Term Investing</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Market Research</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Watchlists</a><br/>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Learning Resources</a><br/>
        </div>

      </div>
    </div>
  )
}

export default CreateTicket;
