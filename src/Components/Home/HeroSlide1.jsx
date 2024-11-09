import React from 'react'
import '../../Themes/Styles.css'

const HeroSlide1 = () => {
    return (
        <div className="slide1">
            <div className="inner-slide1">
                <div className="slide11">
                    <h1 className="head-font">Zend<span className="white-head-font">coders</span></h1>
                    <h1 className="white-head-font">Innovation Meets<span className="head-font"> Expertise</span></h1>
                    <p className="sub-head">We craft digital experiences that engage, inspire, and drive results.</p>
                    <button className="button1">Learn More</button>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730421583/page1_tjzuxg.png" alt="zendcoders" className="sar" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide1
