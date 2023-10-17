import React, { useEffect, useState } from 'react'
import {  graphql, useStaticQuery } from 'gatsby'

import '../assets/css/valentinovo.scss'

import Srce from '../assets/images/srce.png'



const Valentinovo = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "efekti/valentinovo.md"}}) {
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

  const srce = data.allFile.nodes[0].childMarkdownRemark.frontmatter.draft

  const [showSrce, SetShowSrce] = useState(false);


  useEffect(() => {
    if (srce) {
      SetShowSrce(true);
    }
  }, [srce]);

  return(
      <>

        {showSrce && (
            <snowfall>
              <snowflake>
                <img alt='pahulja' src={Srce} />️
              </snowflake>

              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>
              <snowflake><img alt='pahulja' src={Srce} />️</snowflake>

            </snowfall>
        )}
      </>
  )

}
export default Valentinovo
