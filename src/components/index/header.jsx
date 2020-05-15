import React from "react"
import styled from "styled-components"
import NavBar from "../navbar"
import Background from "../background"

export default () => (
  <HeaderBackground filename="video2.png">
    <HeaderContainer>
      <NavBar isTopPage />
      <Title>Web3.0を実現する。</Title>
      <Desctiption>
      Stake Technologiesは、ブロックチェーン技術の利用を中心として、次世代のWebであるWeb3.0の実現を推進していきます。
      誰もが意識することなく、テクノロジーの利便性を公平に享受できるようにすることが私たちの使命です。
      </Desctiption>
    </HeaderContainer>
  </HeaderBackground>
)

const Title = styled.div`
  margin-top: 275px;
  font: 70px/103px Noto Sans JP Light;
`

const Desctiption = styled.div`
  width: 620px;
  height: 81px;
  margin-top: 26px;
  padding: 0px;
  font: 16px/30px Noto Sans JP Regular;
`

const HeaderBackground = styled(Background)`
  && {
    padding-top: 0px;
    width: 100%;
    max-width: 1440px;
    height: 900px;
  }
`
const HeaderContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  color: #ffffff;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 150px;
`
