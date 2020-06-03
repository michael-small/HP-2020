import React from "react"
import SEO from "../components/seo"
import Header from "../components/index/header"
import Layout from "../components/layout"
import WhoWeAre from "../components/index/whoWeAre"
import Waas from "../components/index/waas"
import Media from "../components/index/media"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header />
    <WhoWeAre id="who-we-are" />
    <Waas id="waas" />
    <Media />
  </Layout>
)

export default IndexPage
