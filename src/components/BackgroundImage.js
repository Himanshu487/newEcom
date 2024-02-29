import React from 'react';
import { Link } from 'react-router-dom';
import TypingAnimation from './TypingAnimation';

function BackgroundImage() {
  return (
    <div className='banner'
    style={{
        backgroundSize:"cover",
        backgroundPosition: "center center",
     }}
    > <TypingAnimation/>
         <div className='bannerContents'>
            
            <div className='bannerButtons'>
                <button className='bannerButton'>
                  <Link to="/EnquiryForm" className='EnquireBtn'>Enquire Now</Link>
                  </button>
            </div>
        </div>

        <div className='bannerFadeBottom' />
    </div>
  )
}

export default BackgroundImage

