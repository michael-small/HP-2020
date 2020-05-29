import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import Image from "../image"
import Container from "../container"

export default () => (
  <HeaderWrapper>
    <HeaderBackground
      filename="company/header.jpg"
      style={{ position: "absolute" }}
    />
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
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0);
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
`

const HeaderBackground = styled(Image).attrs(props => ({
  objectFit: "cover",
  loading: "eager",
  ...props,
}))({
  width: "100%",
  height: "100%",
  backgroundPosition: "top right",
  backgroundSize: "cover",
})

const HeaderContainer = styled(Container)`
  position: relative;
  z-index: 10;
  overflow: hidden;
`

const HeaderContent = withTheme(styled.div`
  margin: 138px auto auto;
  width: 100%;
  max-width: 753px;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0px;
  & h1 {
    color: #ffffff;
    font: 300 60px/81px TT Commons;
  }
  & p {
    margin-top: 29px;
    color: #cccccc;
    font: 16px/30px Noto Sans JP;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    margin-top: 124px;
    & h1 {
      font-size: 40px;
      line-height: 54px;
    }
    & p {
      margin-top: 31px;
      font-size: 15px;
    }
  }
`)
