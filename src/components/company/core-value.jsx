import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import localTheme from "./theme"
import _Container from "../container"
import BePassionateSVG from "../../images/company/be-passionate.svg"
import BeGlobalSVG from "../../images/company/be-global.svg"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Core Value</h1>
      <FlexConteiner>
        <FlexItem>
          <img
            src={BePassionateSVG}
            alt="be passionate"
            width={200}
            height={230}
            style={{ display: "block", margin: "0 auto 0" }}
          />
          <h2>Be Passionate</h2>
          <span>熱狂的であれ</span>
        </FlexItem>
        <FlexItem>
          <img
            src={BeGlobalSVG}
            alt="be global"
            width={200}
            height={230}
            style={{ display: "block", margin: "0 auto 0" }}
          />
          <h2>Be Global</h2>
          <span>グローバルマインドセットを持とう</span>
        </FlexItem>
      </FlexConteiner>
    </Container>
  )
}

const Container = withTheme(styled(_Container)`
  ${localTheme}
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
`)

const FlexConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  white-space: nowrap;
  margin: 36px auto -50px;
  h2 {
    text-align: center;
  }
  span {
    display: block;
    text-align: center;
    margin: 0px -50% 0px;
    font: 16px/23px Noto Sans JP;
    color: #7b7b7b;
  }
`

const FlexItem = styled.div`
  margin 0px 70px 50px;
  max-width: 200px;
`
