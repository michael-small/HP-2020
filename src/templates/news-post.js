import React from "react"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { remarkForm, DeleteAction } from 'gatsby-tinacms-remark'
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import NavBar from "../components/navbar"
import styled from "styled-components"
import { StyledLink as Link } from "../components/link"
import Container from "../components/container"

const NewsPostTemplate = (props) => {
  const post = props.data.markdownRemark
  //   const siteTitle = data.site.siteMetadata.title
  //   const { previous, next } = props.pageContext
  return (
    <Layout style={{ backgroundColor: "#f1f1f1" }}>
      <SEO />
      <NavBar />
      <Container maxWidth="md">
        <Link
          to="/news"
          style={{
            position: "absolute",
            marginTop: "10px",
          }}
        >
          <IconButton>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
        <RootTitle>News</RootTitle>
        <Article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <Date>{post.frontmatter.date}</Date>
            <Description>{post.frontmatter.description}</Description>
          </header>
          <hr />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </Article>
      </Container>
    </Layout>
  )
}

const RootTitle = styled.h1`
  margin-top: 80px;
  font: 60px/81px TT Commons;
  font-weight: 700;
  text-align: center;
`

const Date = styled.div`
  display: inline-block;
  background-color: #464646;
  font-weight: bold;
  border-radius: 0.7rem;
  color: white;
  margin-right: auto;
  margin-top: 1.5em;
  padding: 0.5em;
`

const Description = styled.p`
  border-radius: 0.7rem;
  color: #464646;
`

const Article = styled.article`
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: Noto Sans JP;
  background-color: white;
  padding: 30px;
  color: #1a1a1a;
  overflow: hidden;
  line-height: 2;

  a {
    color: #0645ad;
    text-decoration: none;
  }
  a:visited {
    color: #0b0080;
  }
  a:hover {
    color: #06e;
  }
  a:active {
    color: #faa700;
  }
  a:focus {
    outline: thin dotted;
  }
  a:hover,
  a:active {
    outline: 0;
  }

  ::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }
  ::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  a::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }
  a::selection {
    background: rgba(255, 255, 0, 0.3);
    color: #0645ad;
  }

  p {
    margin: 1em 0;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    line-height: 1.5;
  }
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 0.9em;
  }

  blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
  }
  hr {
    display: block;
    height: 2px;
    border: 0;
    border-bottom: 1px solid #aaa;
    margin: 1.5em 0;
    padding: 0;
  }
  pre,
  code,
  kbd,
  samp {
    color: #000;
    font-family: monospace, monospace;
    _font-family: "courier new", monospace;
    font-size: 0.98em;
  }
  pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }
  li p:last-child {
    margin: 0;
  }
  dd {
    margin: 0 0 0 2em;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  th {
    border-bottom: 1px solid black;
  }
  td {
    vertical-align: top;
  }

  @media only screen and (min-width: 480px) {
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }

  @media print {
    * {
      background: transparent !important;
      color: black !important;
      filter: none !important;
      -ms-filter: none !important;
    }
    body {
      font-size: 12pt;
      max-width: 100%;
    }
    a,
    a:visited {
      text-decoration: underline;
    }
    hr {
      height: 1px;
      border: 0;
      border-bottom: 1px solid black;
    }
    a[href]:after {
      content: " (" attr(href) ")";
    }
    abbr[title]:after {
      content: " (" attr(title) ")";
    }
    .ir a:after,
    a[href^="javascript:"]:after,
    a[href^="#"]:after {
      content: "";
    }
    pre,
    blockquote {
      border: 1px solid #999;
      padding-right: 1em;
      page-break-inside: avoid;
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    img {
      max-width: 100% !important;
    }
    @page :left {
      margin: 15mm 20mm 15mm 10mm;
    }
    @page :right {
      margin: 15mm 10mm 15mm 20mm;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`

const NewsPostForm = {
  label: 'News Post',
  actions:[DeleteAction],
  fields: [
    {
      label: 'Title',
      name: 'frontmatter.title',
      description: 'Enter the title of the post here',
      component: 'text',
    },
    {
      label: 'Description',
      name: 'frontmatter.description',
      description: 'Enter the post description',
      component: 'textarea',
    },
    {
      label: 'Date',
      name: 'frontmatter.date',
      component: 'date',
    },
    {
      label: 'Body',
      name: 'rawMarkdownBody',
      component: 'markdown',
    },
  ],
}

export default remarkForm(NewsPostTemplate, NewsPostForm)

export const pageQuery = graphql`
  query NewsPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
      }
      ...TinaRemark
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
