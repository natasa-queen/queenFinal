import React, { useEffect } from 'react'
import { StaticImage } from "gatsby-plugin-image";

import logo from '../assets/images/logo-bg/queen3.png'

import { HiArrowLongDown } from "react-icons/hi2";

import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';

import '../assets/css/header.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

    // const { ref } = useParallax({ speed: -19 });


    useEffect( () => {
        AOS.init({duration:1500})
    }, [])


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

        {/*<div className="header-logoBox" ref={ref} >*/}
        {/*/!*<div className="header-logoBox" >*!/*/}
        {/*    <img*/}
        {/*        src={logo}*/}
        {/*        alt="logo"*/}
        {/*        className='header-logo'*/}

        {/*    />*/}
        {/*</div>*/}

        <ParallaxProvider>
          <Parallax speed={-15} className="header-logoBox">
              <img
                  src={logo}
                  alt="logo"
                  className='header-logo'
              />
          </Parallax>
        </ParallaxProvider>


        {/*<div className="header-arrow">*/}
            <HiArrowLongDown
                className="strelica"
            />
        {/*</div>*/}


      </header>
  )
}
export default Header