import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../assets/css/obavest.scss'

import Marquee from "react-fast-marquee";


const Obavest = () => {

  const data = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "objava"}}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                    draft
                  }
                  html
                  rawMarkdownBody
                  id
                }
              }
            }
          }
        }
  `)

  const obavest = data.allFile.edges


  return(
      <>
        {obavest.map(({node}) => {
          return(

              <div className={node.childMarkdownRemark.frontmatter.draft ? `obavest` : `sakrij`}>

                <Marquee speed={30} autoFill={false}>
                  <p key={node.id}>
                    {node.childMarkdownRemark.rawMarkdownBody}
                  </p>
                </Marquee>

              </div>

          )
        })}
      </>
  )
}

export default Obavest