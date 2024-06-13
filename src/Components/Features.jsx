import React from 'react'
import FeaturesItems from './Items/FeaturesItems'

const Features = () => {
    const feature =[
        {img :"assets/img/feature-1.jpg", text : "2000+ Our Worldwide Guide" , icon:"assets/img/icon1.png"},
        {img :"assets/img/feature-2.jpg", text : "100% Trusted Tour Agency" , icon:"assets/img/icon4.png" },
        {img :"assets/img/feature-3.jpg", text : "12+ Years of Travel Experience" , icon:"assets/img/icon1.png" },
        {img :"assets/img/feature-4.jpg", text : "98% of Our Travelers are Happy" , icon:"assets/img/icon4.png"},
      ]
  return (
    <>
      <div className="feature-outer">
        <div className="container">
            <div className="feature-inner">
                <div className="heading">
                    <p>TRAVIO SPECIALS</p>
                    <h2>Why Travel with Tutive?</h2>
                </div>
                <div className="content">
                    {
                        feature.map((i) =><FeaturesItems value={i}/>)
                    }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features
