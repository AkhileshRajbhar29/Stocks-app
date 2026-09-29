import React from 'react'

const Hero = () => {
    return (
        <div className='container'>
            <div className="row p-5 mt-5 mb-5">
                <h1 className='fs-2 text-center'>
                    Making trading simple with technology
                </h1>
            </div>
            <div className="row p-5 mt-5 border-top text-muted" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5'>
                    <p>
                       TradeX is built with a simple goal: make the stock market experience easier, more transparent, and accessible through modern technology.
                    </p>
                    <p>
                       We designed TradeX to bring essential trading and investment tools together in one clean platform. From exploring market information to tracking your portfolio, our focus is on creating a smooth experience for modern investors.
                    </p>
                    <p>
                        TradeX combines a modern user interface with powerful web technologies to create a fast and convenient trading experience. We believe good technology should simplify complex financial information rather than make it harder to understand.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <p>
                        TradeX is designed to help users explore different aspects of the stock market, understand their portfolio, and become more familiar with trading concepts through an easy-to-use platform.
                    </p>
                    <p>
                       TradeX is an evolving project. We continue to explore new ideas, improve the user experience, and build features that make managing and understanding investments more convenient.
                    </p>
                    <p>
                        Our goal is simple: build a modern platform where technology and financial learning come together.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero