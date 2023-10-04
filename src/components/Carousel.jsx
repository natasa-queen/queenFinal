import React from 'react'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'



function Slider({ images }) {

    // const image = `../assets/images / salon / salon2.jpg`


    return (
        <Carousel fade interval={null} indicators={false} >


                {images.map((image, index) => (
                    <Carousel.Item>
                        <GatsbyImage
                            key={index}
                            image={getImage(image)}
                            alt='slika salona'
                        />

                    </Carousel.Item>

                ))}


                {/*<ExampleCarouselImage text="First slide" />*/}
                {/*<Carousel.Caption>*/}
                {/*    <h3>First slide label</h3>*/}
                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}

        </Carousel>
    );
}

export default Slider;