import React from 'react'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/salon/salon2.jpg';


function Slider({ images }) {

    // const image = `../assets/images / salon / salon2.jpg`


    return (
        <Carousel fade>
            <Carousel.Item>

                {images.map((image, index) => (
                    <GatsbyImage
                        key={index}
                        image={getImage(image)}
                        alt='slika salona'

                    />
                ))}


                {/*<ExampleCarouselImage text="First slide" />*/}
                {/*<Carousel.Caption>*/}
                {/*    <h3>First slide label</h3>*/}
                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;