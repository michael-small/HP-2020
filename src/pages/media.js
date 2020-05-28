import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import MediaContents from "../components/media/media-contents"

const MediaPage = () => (
  <Layout>
    <SEO title="Media" />
    <NavBar />
    <MediaContents />
  </Layout>
)

export default MediaPage
