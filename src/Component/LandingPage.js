import React from 'react'
import HeaderBar from './HeaderBar'
import { About } from './About'
import { Testimonial } from './Testimonial'
import { Footer } from './Footer'
import homeImage from '../Assets/home-image.svg'

const LandingPage = () => {
    return <div className="home-container">
    <HeaderBar />
    <div className="home-banner-container">
        <div className="home-text-section">
            <div className="text-section">
            <h1 className="primay-heading">Leave the cleaning to us, and reclaim your time for what matters most</h1>
            <p className="primary-text">Clean spaces, happy faces - let us do the dirty work for you!</p>
            <div className="about-buttons-container">
                <button className="secondary-button">
                    Sign in as a Doer
                </button>
                <button className="primary-button">
                    Sign in as a Tasker
                </button>
            </div>
            </div>
            
        </div>
        <div classNamae="home-image-section">
            <img src={homeImage} alt="home image Hive" />
        </div>
    </div>
    <About />
    <Testimonial />
    <Footer />
  </div>;
}

export default LandingPage