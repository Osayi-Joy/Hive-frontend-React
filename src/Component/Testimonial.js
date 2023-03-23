import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png';
import { BsStarFill } from "react-icons/bs";

export const Testimonial = () => {
  return (
    <div className="work-section-wraper">
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They are Saying</h1>
            <p className='primary-text'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="profile picture for hive users" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit amet aut obcaecati dicta 
                ipsum quam commodi asperiores fugit voluptas nihil!</p>

            <div className='testimonials-stars-container'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
            </div>

            <h2>John Doe</h2>
        </div>

    </div>

  );
};
