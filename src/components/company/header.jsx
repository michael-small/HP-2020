import React from "react"
import styled from "styled-components"
import Background from "../background"

export default () => (
  <HeaderBackground
    filename="company/header.jpg"
    style={{
      backgroundPosition: "top left",
      backgroundSize: "cover",
    }}
  >
    <HeaderWrapper>
      <HeaderContent>
        <h1>Who We Are</h1>
        <p>
          Stake Technologiesは、ブロックチェーン技術の利用を中心として、次世代のWebであるWeb3.0の実現を推進していきます。
          誰もが意識することなく、テクノロジーの利便性を公平に享受できるようにすることが私たちの使命です。
        </p>
      </HeaderContent>
    </HeaderWrapper>
  </HeaderBackground>
)

const HeaderBackground = styled(Background)`
  && {
    min-height: 600px;
    background-color: #ffffff;
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
  max-width: min(753px, calc(100% - 100px));
  text-align: center;
  letter-spacing: 0px;
  & h1 {
    margin: 0px 0px 29px;
    color: #ffffff;
    font: 60px/81px TT Commons Light;
  }
  & p {
    margin: 0px;
    color: #cccccc;
    font: 16px/30px Noto Sans JP Regular;
  }
`
