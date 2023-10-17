import React, { useEffect, useState } from 'react'
import {  graphql, useStaticQuery } from 'gatsby'

import '../assets/css/snowfall.scss'

import Pahuljica from '../assets/images/snowflake8.png'



const Pahuljice = () => {

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

  const [showSnowfall, setShowSnowfall] = useState(false);


  useEffect(() => {
    if (pahulje) {
      setShowSnowfall(true);
    }
  }, [pahulje]);

  return(
      <>

        {showSnowfall && (
            <snowfall>
              <snowflake>
                <img alt='pahulja' src={Pahuljica} />️
              </snowflake>

              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>
              <snowflake><img alt='pahulja' src={Pahuljica} />️</snowflake>

            </snowfall>
        )}
      </>
  )

}
export default Pahuljice
