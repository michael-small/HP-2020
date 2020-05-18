import React from "react"
import SEO from "../components/seo"
import Header from "../components/service/header"
import NavBar from "../components/navbar"
import IndexNavBar from "../components/index-navbar"
import Products from "../components/service/products"
import Layout from "../components/layout"
import ServiceArea from "../components/service/service-area"

const navbarLabels=[
  {
    to:"/service/#products",
    label:"プロダクト",
  },{
    to:"/service/#development",
    label:"プロダクト開発",
  },{
    to:"/service/#rd",
    label:"研究開発",
  },{
    to:"/service/#consulting",
    label:"技術コンサルティング",
  },{
    to:"/service/#blog",
    label:"ブログ",
  }
]

const ServicePage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <Header />
    <IndexNavBar labels={navbarLabels}/>
    <Products id="products" />
    <ServiceArea />
  </Layout>
)

export default ServicePage
