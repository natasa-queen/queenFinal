import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import '../assets/css/carousel.scss'
import Slider from '../components/Carousel'


const Salon = ({ data }) => {

    const images = data.allFile.nodes

    return(
        <Layout>
            <h2>Nas salon</h2>


            <div className="carousel-wraper">
                <Slider images={images} />
            </div>


        </Layout>
    )
}
export default Salon


export const query = graphql`
  query {
    allFile(filter: {relativePath: {}, relativeDirectory: {eq: "salon"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`