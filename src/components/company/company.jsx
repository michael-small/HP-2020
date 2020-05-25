import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import localTheme from "./theme"
import _Container from "../container"
import ArrowButton from "../arrowButton"

const Company = ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Company</h1>
      <Table>
        <tr>
          <Attr>会社名</Attr>
          <Val>Stake Technologies株式会社</Val>
        </tr>
        <tr>
          <Attr>設立</Attr>
          <Val>2019年1月</Val>
        </tr>
        <tr>
          <Attr>住所</Attr>
          <Val>
            {
              "東京都港区南⻘山3-1-30 エイベックスビル コワーキングスペース「avex EYE」内"
            }
          </Val>
        </tr>
        <tr>
          <Attr>代表取締役</Attr>
          <Val>渡辺創太</Val>
        </tr>
        <tr>
          <Attr>Eメール</Attr>
          <Val>info@stake.co.jp</Val>
        </tr>
      </Table>
      <ArrowButton
        css="margin: 0 auto 0;"
        lang="ja"
        to="/contact"
        label="お問い合わせ"
      />
    </Container>
  )
}

const Container = withTheme(styled(_Container)`
  ${localTheme}
  padding-top: 60px;
  padding-bottom: 149px;
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
`)

const Table = withTheme(styled.table`
  margin: 26px auto 67.5px;
  font: 16px/30px Noto Sans JP Regular;
  text-align: left;
  letter-spacing: 0px;
  width: 100%;
  max-width: 700px;
  td {
    vertical-align: middle;
    margin: auto 0 auto;
    padding-top: 1.6em;
    padding-bottom: 1.6em;
  }
  tr {
    height: 5em;
    border-bottom: 1px solid #dedede;
    border-collapse: collapse;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    tr {
      display: block;
      height: auto;
      padding-top: 1em;
      padding-bottom: 1em;
    }
    td {
      display: block;
      border: none;
      padding: 0.25em 0.75em;
    }
  }
`)

const Attr = styled.td`
  padding-left: 1.5em;
  max-width: 30%;
  color: #1a1a1a;
  width: 172px;
`

const Val = styled.td`
  text-align: left;
  padding-right: 1.5em;
  color: #7b7b7b;
`

export default Company
