import React from 'react'
import HeaderBar from './HeaderBar'
import homeImage from '../Assets/home-image.svg'

const LandingPage = () => {
    return <div className="home-container">
    <HeaderBar />
    <div className="home-banner-container">
        <div className="home-text-section">
            <div className="text-section">
            <h1 className="primay-heading">Leave the cleaning to us, and reclaim your time for what matters most</h1>
            <p className="primary-text">Clean spaces, happy faces - let us do the dirty work for you!</p>
            <div className="for-button">
                <button className="secondary-button">
                    Sign as a cleaner
                </button>
                <button className="primary-button">
                    Sign as a client
                </button>
            </div>
            </div>
            
        </div>
        <div classNamae="home-image-section">
            <img src={homeImage} alt="home image Hive" />
        </div>
    </div>
  </div>;
}

export default LandingPage