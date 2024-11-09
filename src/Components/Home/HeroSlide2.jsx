import React from 'react'
import '../../Themes/Styles.css'

const HeroSlide2 = ({ isVisible }) => (
    <div className="slide2">
        <div className={`inner-slide2 ${isVisible ? 'visible' : ''}`}>
            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730364179/page2_bf5qbn.png" alt="img2" className="image2" />
        </div>
        <div className={`inner2 ${isVisible ? 'visible' : ''}`}>
            <h1 className="head-font1">Join Our Crew of Innovators</h1>
            <p className="para-font-2">Building Digital Excellence Together...</p>
            <button className="button1">Join</button>
        </div>
    </div>
);

export default HeroSlide2
