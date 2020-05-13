import React from "react"
import SEO from "../components/seo"
import Header from "../components/index/header"
import Layout from "../components/layout"
import WhoWeAre from "../components/index/whoWeAre"
import Waas from "../components/index/waas"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <WhoWeAre />
    <Waas />
  </Layout>
)

export default IndexPage
