import React from "react"
import styled from "styled-components"
import Background from "../background"

export default () => (
  <HeaderBackground filename="company/header.jpg"
    style={{
      backgroundPosition: "top left",
      backgroundSize: "cover"
    }}
  >
  <HeaderWrapper>
  <HeaderContent>
    <h1>Who We Are</h1>
    <p>
    Stake Technologiesはブロックチェーンなどの最先端技術を用い次世代の分散型WebであるWeb3.0、そしてその先に社会の再分散化を目指すテクノロジー企業です。
    </p>
  </HeaderContent>
  </HeaderWrapper>
  </HeaderBackground>
)

const HeaderBackground = styled(Background)`
  && {
    min-height: 600px;
    background-color: #FFFFFF;
  }
`

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
`

const HeaderContent = styled.div`
  position: relative;
  margin: 118px auto auto;
  // top: 118px;
  // left: 100px;
  // right: 100px;
  // margin: auto;
  max-width: min(753px,calc(100% - 100px));
  text-align: center;
  letter-spacing: 0px;
  & h1 {
    margin: 0px 0px 29px;
    color: #FFFFFF;
    font: 60px/81px TT Commons Light;
  }
  & p {
    margin: 0px;
    color: #CCCCCC;
    font: 16px/30px Noto Sans JP Regular;
  }
`
