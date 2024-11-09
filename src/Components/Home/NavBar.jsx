import React from 'react'
import "../../Themes/Styles.css";
import ZenDcodersLogoDark from '../../Assets/ZenDcoders_Logo_Dark.png';


const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={ZenDcodersLogoDark} alt="Zendcoders" className="logo1" />
      </nav>

    </div>
  )
}

export default NavBar
