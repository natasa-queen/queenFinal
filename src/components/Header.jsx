import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import logo from '../assets/images/logo-bg/queen3.png'


import { HiArrowLongDown } from "react-icons/hi2";


import '../assets/css/header.scss'

const Header = () => {
  return(
      <header>

        <div className="header-modal">
            <StaticImage
                src='../assets/images/logo-bg/q1.jpg'
                alt='Header slika'
                placeholder='blurred'
                className='header-slika'

            />
        </div>

        <div className="header-logoBox">
            <img
                src={logo}
                alt="logo"
                className='header-logo'
            />
        </div>

        {/*<div className="header-arrow">*/}
            <HiArrowLongDown
                className="strelica"
            />
        {/*</div>*/}


      </header>
  )
}
export default Header