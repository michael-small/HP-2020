import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NavBar />
    <div
      style={{
        padding: "100px 150px 100px",
        backgroundColor: "#F5F5F5",
        color: "#1A1A1A",
      }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
