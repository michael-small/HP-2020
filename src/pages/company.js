import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import Header from "../components/company/header"
import Vision from "../components/company/vision"
import Team from "../components/company/team"
import Image from "../components/image"

const CompanyPage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <Header />
    <Vision />
    <Team />

    {/* <Image filename="coming-soon.png" style={{
      width: "70%",height:"70vh",
      margin: "auto",opacity: "0.2"
    }}/> */}
  </Layout>
)

export default CompanyPage
