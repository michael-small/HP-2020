import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import Image from "../components/image"

const MediaPage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar/>
    <Image filename="coming-soon.png" style={{
      width: "70%",height:"70vh",
      margin: "auto",opacity: "0.2"
    }}/>
    </Layout>
)

export default MediaPage
