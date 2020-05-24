import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import Background from "../background"
import Container from "../container"

export default () => (
  <HeaderBackground
    filename="company/header.jpg"
    style={{
      backgroundPosition: "top right",
      backgroundSize: "cover",
    }}
  >
    <HeaderContainer>
      <HeaderContent>
        <h1>Who We Are</h1>
        <p>
          Stake
          Technologiesは、ブロックチェーン技術の利用を中心として、次世代のWebであるWeb3.0の実現を推進していきます。
          誰もが意識することなく、テクノロジーの利便性を公平に享受できるようにすることが私たちの使命です。
        </p>
      </HeaderContent>
    </HeaderContainer>
  </HeaderBackground>
)

const HeaderBackground = styled(Background)`
  && {
    min-height: 100vh;
    background-color: #ffffff;
  }
`

const HeaderContainer = styled(Container)`
  overflow: hidden;
`

const HeaderContent = withTheme(styled.div`
  margin: 138px auto auto;
  width: 100%;
  max-width: 753px;
  text-align: center;
  color: #FFFFFF;
  letter-spacing: 0px;
  & h1 {
    color: #FFFFFF;
    font: 60px/81px TT Commons Light;
  }
  & p {
    margin-top: 29px;
    color: #cccccc;
    font: 16px/30px Noto Sans JP Regular;
  }
  ${props=>props.theme.breakpoints.down("xs")} {
    margin-top: 124px 
    & h1 {
      font-size: 40px;
      font-weight: 54px;
    }
    & p {
      margin-top: 31px;
      font-size: 15px;
    }
  }
`)
