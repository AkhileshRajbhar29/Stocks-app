import React from 'react'
import "./RightSection.css";

const RightSection = ({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) => {
  return (
    <div className='container-fluid mt-5 '>
        <div className='row rightSectionContainer'>
            <div className='col-6 mt-5 rightSectionContainer-textContent'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>

            </div>
            <div className='col-6'>
                <img src={imageURL} alt="right_image" style={{height:"100%", width:"100%"}}/>
            </div>
        </div>
    </div>
  )
}

export default RightSection;