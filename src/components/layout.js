/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "../fonts/fonts.css"
// import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          width: "100%",
          padding: `0px`,
          overflow: "hidden",
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
html{
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:62.5%;
  vertical-align:baseline;
  background:transparent;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

body {
  line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
  display:block;
}

nav ul {
  list-style:none;
}

blockquote, q {
  quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content:'';
  content:none;
}

a {
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

/* change colours to suit your needs */
ins {
  background-color:#ff9;
  color:#000;
  text-decoration:none;
}

/* change colours to suit your needs */
mark {
  background-color:#ff9;
  color:#000; 
  font-style:italic;
   font-weight:bold;
}

del {
  text-decoration: line-through;
}

abbr[title], dfn[title] {
  border-bottom:1px dotted;
  cursor:help;
}

table {
  border-collapse:collapse;
  border-spacing:0;
}

/* change border colour to suit your needs */
hr {
  display:block;
  height:1px;
  border:0;   
  border-top:1px solid #cccccc;
  margin:1em 0;
  padding:0;
}

input, select {
  vertical-align:middle;
}

::-webkit-scrollbar{
  width: 0px;
}

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
