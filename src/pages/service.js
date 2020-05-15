import React from "react"
import SEO from "../components/seo"
import Header from "../components/service/header"
import NavBar from "../components/navbar"
import IndexNavBar from "../components/service/index-navbar"
import Products from "../components/service/products"
import Layout from "../components/layout"
import ServiceArea from "../components/service/service-area"

const ServicePage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <Header />
    <IndexNavBar />
    <Products id="products" />
    <ServiceArea />
  </Layout>
)

export default ServicePage
