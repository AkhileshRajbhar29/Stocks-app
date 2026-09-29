import React from 'react'

const RightSection = ({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>

            </div>
            <div className='col-6'>
                <img src={imageURL}  style={{height:"100%", width:"100%"}}/>
            </div>
        </div>
    </div>
  )
}

export default RightSection;