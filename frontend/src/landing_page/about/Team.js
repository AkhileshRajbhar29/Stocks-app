import React from 'react'

const Team = () => {
  return (
    <div className='container'>
            <div className="row p-5 mt-5 border-top">
                <h1 className='fs-2 text-center'>People</h1>
            </div>
            <div className="row p-5 mt-5 text-muted" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5 text-center'>
                    <img src="media/images/developer.jpg" alt="founder-img" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-4'>Akhilesh Rajbhar</h5>
                    <p className='mt-3'>Developer   </p>
                </div>
                <div className='col-6 p-5'>
                    <p>
                        TradeX is built with a focus on combining technology, simplicity, and financial learning into one modern platform.
                    </p>
                    <p>
                        Our goal is to create an easy-to-use experience that helps users explore the stock market, understand their portfolio, and interact with essential trading tools.
                    </p>
                    <p>
                        From designing the user interface to developing the frontend, backend, and dashboard, every part of TradeX is built with continuous learning and improvement in mind.
                    </p>
                    <p>
                        TradeX represents our effort to understand how modern trading platforms work and how technology can make financial information easier to explore and manage.
                    </p>
                    <p>
                        We're constantly learning, building, and improving TradeX.
                    </p>
                    
                </div>
            </div>
        </div>
  )
}

export default Team;