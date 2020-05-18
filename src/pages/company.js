import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import Header from "../components/company/header"
import IndexNavBar from "../components/index-navbar"
import Vision from "../components/company/vision"
import Team from "../components/company/team"
import CoreValue from "../components/company/core-value"
import Company from "../components/company/company"

const indexNavBarLabels=[
  {
    to: "/company/#vision",
    label: "ビジョン",
  },{
    to: "/company/#team",
    label: "チーム",
  },{
    to: "/company/#value",
    label: "バリュー",
  },{
    to: "/company/#company",
    label: "会社概要",
  },{
    to: "/company/#blog",
    label: "ブログ",
  },
]

const CompanyPage = () => (
  <Layout>
    <SEO title="Service" />
    <NavBar />
    <Header />
    <IndexNavBar labels={indexNavBarLabels}/>
    <Vision id="vision" />
    <Team id="team"/>
    <CoreValue id="value"/>
    <Company id="company"/>

    {/* <Image filename="coming-soon.png" style={{
      width: "70%",height:"70vh",
      margin: "auto",opacity: "0.2"
    }}/> */}
  </Layout>
)

export default CompanyPage
