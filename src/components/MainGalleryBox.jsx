import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/main-gallery-box.scss'
import {StaticImage} from "gatsby-plugin-image";


import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/osnovne/q1-1.jpg';


const MainGalleryBox = () => {
    return(
        <div className="gallery-box">
            <Carousel fade controls={false} indicators={false} pause={false} className='main-carousel'>
                <Carousel.Item interval={2000} className="carousel-item">
                    <StaticImage alt='slika' src='../assets/images/osnovne/q1-1.jpg'  className="slika" placeholder="blurred"
                                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <StaticImage alt='slika' src='../assets/images/osnovne/q2-1.jpg'  className="slika" placeholder="blurred"
                                  />
                </Carousel.Item>
            </Carousel>

            <div className="box2">
                <Link to='/galerija'>
                    <h2>Galerija</h2>
                    <p>Naš salon je mjesto gdje se opuštanje, ljepota i zadovoljstvo spajaju u savršenom skladu.  Naš cilj je da se brinemo o vašem tijelu od glave do pete, kako bi se osjećali zadovoljno i samopouzdano u svojoj koži.</p>
                </Link>
            </div>
        </div>
    )
}
export default MainGalleryBox