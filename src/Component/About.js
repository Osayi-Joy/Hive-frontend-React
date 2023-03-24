import React from 'react'

//new addition
export const About = () => {
  return <div className='about-section-container'>
    <div className='about-section-doer'>
        <h2 className='primary-subheading'>What to Know About Doers</h2>
        <p className='primary-text'>
            Doers is a platform that connects people who want to do something with people who want to get something done.
             We believe that everyone has something to offer and that everyone can benefit from the help of others.
              We also believe that the best way to get things done is to do them together.
        </p>
        <div className='about-buttons-container'>
            <button className='primary-button'>Learn More</button>
        </div>
    </div>
    <div className='about-section-tasker'>
        <h2 className='primary-subheading'>What to Know About Taskers</h2>
        <p className='primary-text'>
            Taskers is a platform that connects people who want to do something with people who want to get something done.
                We believe that everyone has something to offer and that everyone can benefit from the help of others.
                We also believe that the best way to get things done is to do them together.
        </p>
        <div className='about-buttons-container'>
            <button className='primary-button'>Learn More</button>
        </div>
    </div>
  </div>;
};
