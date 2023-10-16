import React, { useEffect } from 'react'
import {  graphql, useStaticQuery } from 'gatsby'
import '../assets/css/pahulje.scss'


import Snowflakes from 'magic-snowflakes';

// import Snowfall from 'react-snowfall'


const Pahulje = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "efekti/pahulje.md"}}) {
        totalCount
        nodes {
          childMarkdownRemark {
            frontmatter {
              draft
            }
          }
        }
      }
    }
  `)

  const pahulje = data.allFile.nodes[0].childMarkdownRemark.frontmatter.draft



  useEffect(() => {
    if (pahulje) {
      const snowflakes  = new Snowflakes({
        color: '#fff', // Default: "#5ECDEF"
        // container: document.querySelector(''), // Default: document.body
        count: 7, // 100 snowflakes. Default: 50
        minOpacity: 0.6, // From 0 to 1. Default: 0.6
        maxOpacity: 0.95, // From 0 to 1. Default: 1
        minSize: 6, // Default: 10
        maxSize: 15, // Default: 25
        rotation: true, // Default: true
        speed: 0.5, // The property affects the speed of falling. Default: 1
        wind: true, // Without wind. Default: true
        // width: 500, // Default: width of container
        // height: 250, // Default: height of container
        zIndex: 100, // Default: 9999,
        autoResize: true // Default: true
      });

      // pahulje ? snowflakes.start() : snowflakes.destroy()

      snowflakes.start();
    }

    return () => {
      // snowflakes.stop();
      // snowflakes.destroy();
    };



  }, []);



  // useEffect(() => {
  //   const snowflakes  = new Snowflakes({
  //     color: '#000', // Default: "#5ECDEF"
  //     // container: document.querySelector(''), // Default: document.body
  //     count: 10, // 100 snowflakes. Default: 50
  //     minOpacity: 0.6, // From 0 to 1. Default: 0.6
  //     maxOpacity: 0.95, // From 0 to 1. Default: 1
  //     minSize: 7, // Default: 10
  //     maxSize: 19, // Default: 25
  //     rotation: true, // Default: true
  //     speed: 0.5, // The property affects the speed of falling. Default: 1
  //     wind: true, // Without wind. Default: true
  //     // width: 500, // Default: width of container
  //     // height: 250, // Default: height of container
  //     zIndex: 100, // Default: 9999,
  //     autoResize: true // Default: true
  //   });
  //
  //
  //   // pahulje ? snowflakes.start() : snowflakes.destroy()
  //
  //
  //
  //   snowflakes.start();
  //
  //   return () => {
  //     // snowflakes.stop();
  //     // snowflakes.destroy();
  //   };
  //
  //
  //
  // }, []);





  return(
      <div className='pahulje-kontejner'>
        {/*<h2>Pahulje</h2>*/}

        {/*<Snowfall*/}
        {/*    color="#436aec"*/}
        {/*    style={{ background: '#a20000' }}*/}
        {/*    snowflakeCount={150}*/}
        {/*    // images={images}*/}
        {/*/>*/}

      </div>
  )

}
export default Pahulje