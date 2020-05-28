import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import { StyledLink } from "../components/link"
import _Container from "../components/container"
import localTheme from "../components/career/theme"
import Header from "../components/career/header"

const CareerPage = () => (
  <Layout>
    <SEO title="Career" />
    <NavBar />
    <Header />
    <Bg>
      <Container>
        <h1>Job Openings</h1>
        <p>
          現在オープンポジションでの採用を行なっています。弊社に興味がある方は
          <Link to="/contact">Contact</Link>よりお問い合わせをお願いいたします。
        </p>
      </Container>
    </Bg>
  </Layout>
)

const Bg = styled.div`
  background-color: #f5f5f5;
`

const Link = styled(StyledLink)`
  && {
    color: #1a1a1a;
  }
`

const Container = withTheme(styled(_Container)`
  ${localTheme}
`)

export default CareerPage
