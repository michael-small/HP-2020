import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import { StyledLink as Link } from "../components/link"
import _Container from "../components/container"

const NewsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Contact" />
      <NavBar />
      <Container>
        <h1>News</h1>
        <NewsTable>
          <tbody>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <tr key={node.fields.slug}>
                  <td>{node.frontmatter.date}</td>
                  <td>
                    <Link to={node.fields.slug}>{title}</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </NewsTable>
      </Container>
    </Layout>
  )
}

const Container = withTheme(styled(_Container)`
  overflow: hidden;
  letter-spacing: 0px;
  padding-bottom: 100px;
  & h1 {
    text-align: center;
    margin: 95px auto 0px;
    font: 60px/81px TT Commons;
    font-weight: Bold;
  }
`)

const NewsTable = withTheme(styled.table`
  margin: 26px auto 67.5px;
  font: 16px/30px Noto Sans JP;
  text-align: left;
  letter-spacing: 0px;
  width: 100%;
  tr {
    height: 5em;
    border-bottom: 1px solid #dedede;
    border-collapse: collapse;
  }
  td {
    vertical-align: middle;
    margin: auto 0 auto;
    padding-top: 1.6em;
    padding-bottom: 1.6em;
    &:first-child {
      padding-left: 1.5em;
      max-width: 30%;
      color: #7b7b7b;
      width: 172px;
    }
    &:last-child {
      text-align: left;
      padding-right: 1.5em;
      color: #1a1a1a;
    }
  }
  ${props => props.theme.breakpoints.down("xs")} {
    tr {
      display: block;
      height: auto;
      padding-top: 1em;
      padding-bottom: 1em;
    }
    td {
      display: block;
      border: none;
      padding: 0.25em 0.75em;
      &:first-child {
        max-width: none;
      }
    }
  }
`)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
          }
        }
      }
    }
  }
`

export default NewsPage
