import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ filename, className, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) return

      const imageFluid = image.node.childImageSharp.fluid

      return <Img fluid={imageFluid} className={className} {...props} />
    }}
  />
)
