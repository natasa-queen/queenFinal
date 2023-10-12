import React from 'react'
import {graphql, Script} from 'gatsby'

// import Seo from '../components/Seo'

import '../assets/css/salon.scss'

import Layout from '../components/Layout'

import '../assets/css/carousel.scss'
import Slider from '../components/Carousel'


const Salon = ({ data }) => {

    const images = data.allFile.nodes

    return(
        <Layout>
          <section className="nas-salon">
            <h2>Naš salon</h2>


            <div className="carousel-wraper">
              <Slider images={images} />
            </div>
          </section>



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

// export const Head = () => {
//     return(
//         <>
//             <Seo title="Nas salon | Queen" />
//         </>
//     )
// }