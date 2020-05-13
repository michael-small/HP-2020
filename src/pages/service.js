import React from "react"
import SEO from "../components/seo"
import Header from "../components/service/header"
import NavBar from "../components/navbar"
import IndexNavBar from "../components/service/index-navbar"
import Layout from "../components/layout"

const ServicePage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar/>
    <Header/>
    <IndexNavBar/>
  </Layout>
)

export default ServicePage
