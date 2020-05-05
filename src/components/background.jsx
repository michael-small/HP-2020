import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default ({filename, ...props}) => (

  <StaticQuery

    query={graphql`
      query {
        images: allFile(
          filter: {
            sourceInstanceName:{eq:"images"}
          }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {

      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) return
      
      const imageFluid= image.node.childImageSharp.fluid
      
      return <BackgroundImage fluid={imageFluid} {...props}>
        {props.children}
      </BackgroundImage>
    }}
  />
)