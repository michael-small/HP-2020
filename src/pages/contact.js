import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import localTheme from "../components/contact/theme"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import ComingSoon from "../components/coming-soon"

const ContactPage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <Container>
      <h1>Contact</h1>
    </Container>
    <ComingSoon />
  </Layout>
)

const Container = withTheme(styled.div`
  ${localTheme}
`)

export default ContactPage
