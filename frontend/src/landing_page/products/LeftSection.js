import React from 'react'
import "./LeftSection.css";

const LeftSection = ({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) => {
  return (
    <div className='continer mt-5'>
        <div className='row leftSection-div'>
            <div className='col-6 text-center'>
                <img src={imageURL} style={{height:"100%", width:"100%"}}/>
            </div>
            <div className='col-6 leftSection-textContent'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3'>
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg"/>
                    </a>
                    <a href={appStore}>
                        <img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection;