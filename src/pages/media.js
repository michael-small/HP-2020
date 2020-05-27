import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import MediaContents from "../components/media/media-contents"
import ComingSoon from "../components/coming-soon"

const MediaPage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <MediaContents />
    <ComingSoon />
  </Layout>
)

export default MediaPage
