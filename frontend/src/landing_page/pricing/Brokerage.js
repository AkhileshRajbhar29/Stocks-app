import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
        <div className='row p-5 mt-5 text-center border-top'>
                <a href="" style={{textDecoration:"none"}}>
                    <h3 className='fs-5'>Brokerage calculation</h3>
                </a>
                <ul className='text-start text-muted' style={{lineHeight:"2.5", fontSize:'14px'}}>
                    <li>Call & Trade / Auto Square-off: Additional charges may apply as configured in the TradeX project.</li>
                    <li>Digital Contract Notes: Contract notes can be provided digitally through e-mail.</li>
                    <li>Physical Contract Notes: Physical copies, if requested, may be subject to applicable printing and delivery charges.</li>
                    <li>Equity Transactions: Brokerage is calculated according to the pricing structure configured in the TradeX platform.</li>
                    <li>Order Charges: Applicable charges are displayed according to the transaction type and pricing configuration.</li>
                </ul>
            <p className='text-start text-muted' style={{fontSize:'14px'}}>Note: TradeX is a demo/educational project. The brokerage and other charges displayed on this page are for demonstration purposes only and do not represent actual brokerage or financial-service pricing.</p>
        </div>
        <p>
            
        </p>
    </div>
  )
}

export default Brokerage;