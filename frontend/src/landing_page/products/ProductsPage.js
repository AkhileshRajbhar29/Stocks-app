import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductsPage = () => {
  return (
    <div>
        <Hero/>
        <LeftSection
        imageURL="media/images/tradexPlateform.png"
        productName="TradeX Platform"
        productDescription="TradeX is designed to bring essential trading and investment features together in one simple and modern platform. Explore markets, manage your portfolio, and use intuitive tools to understand your investments."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""
        />
        
        <RightSection
        imageURL="media/images/tradingPlateform.png"
        productName="Trading Platform"
        productDescription="A clean and responsive trading interface designed to help users explore market data, track stocks, and manage their trading activities with ease. Access the platform through a modern web experience built for convenience."
        learnMore=""
        />
        
        <LeftSection
        imageURL="media/images/portfolioDshboard.png"
        productName="Portfolio Dashboard"
        productDescription="A centralized dashboard for managing your TradeX account. Track your holdings, positions, transactions, and portfolio performance through an easy-to-understand interface."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""
        />
        <RightSection
        imageURL="media/images/mutualFund.png"
        productName="Mutual Funds"
        productDescription="Explore mutual fund investment options through a simple and convenient interface. View available funds, understand basic investment information, and keep your investments organized in one place."
        learnMore=""
        />
        
        <LeftSection
        imageURL="media/images/tradexAPI.png"
        productName="TradeX API"
        productDescription="Build and experiment with trading-related applications using APIs designed for the TradeX project. Developers can explore market data, account information, and other platform features through a simple API-based architecture."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""
        />

        <p className='text-center fs-5 px-5 mt-5'>
            Want to know more about the technology behind TradeX? Explore our platform features, development approach, and the technologies used to build this project.
        </p>
        <Universe/>
    </div>
  )
}

export default ProductsPage;