import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import ComingSoon from "../components/coming-soon"

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <Container>
      <h1>Privacy Policy</h1>
      {/* <h2></h2>
    <p></p> */}
    </Container>
    <ComingSoon />
  </Layout>
)

const Container = styled.div`
  margin: 0 auto 0;
  width: calc(100% - 100px);
  max-width: 600px;
  padding: 80px 0px 80px;
  font-weight: normal;
  h1 {
    text-align: center;
    font: 60px/81px TT Commons;
    font-weight: Bold;
    letter-spacing: 0px;
    color: #1a1a1a;
    opacity: 1;
    margin: 0 auto 77px;
  }
  h2 {
    text-align: left;
    font: 16px/30px Noto Sans JP Bold;
    letter-spacing: 0px;
    color: #1a1a1a;
    opacity: 1;
    margin: 0 auto 0;
  }
  p {
    text-align: left;
    font: 16px/30px Noto Sans JP Regular;
    letter-spacing: 0px;
    color: #7b7b7b;
    opacity: 1;
    margin: 0 auto 50px;
  }
`

export default PrivacyPolicyPage
