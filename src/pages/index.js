import React from "react"
import SEO from "../components/seo"
import Header from "../components/index/Header";
import Layout from "../components/layout"
import WhoWeAre from "../components/index/WhoWeAre";
import Waas from "../components/index/Waas";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Header/>
    <WhoWeAre/>
    <Waas/>
  </Layout>
)

export default IndexPage
