import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import Background from "../background"

export default () => (
  <HeaderBackground filename="service/bg.jpg"
    style={{
      backgroundPosition: "top right",
      backgroundSize: "auto 100%"
    }}
  ><HeaderWrapper>
  <HeaderContent>
    <h1>Web3.0 as a Service</h1>
    <p>
    Web1.0とは読むことのできるWeb。Web2.0とは現在私たちが使用しているような動的な読み書きができる対話型のWebです。ブロックチェーンのような分散化技術によってWeb3.0が新たに手にするものは信頼と検証可能性です。それはインターネットとWebをより分権し検証可能にし安全にします。Web3.0は幅広いムーブメントでありそれに関わる技術と人々の挑戦です。私たちは、ブロックチェーンと分散化技術を用いサービスを提供することで未来に挑戦しています。
    </p>
  </HeaderContent>
  </HeaderWrapper></HeaderBackground>
)

const HeaderBackground = styled(Background)`
  && {
    min-height: 600px;
    background-color: #1A1A1A;
  }
`

const HeaderWrapper = styled.div`
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`

const HeaderContent = styled.div`
  position: relative;
  top: 162px;
  left: 150px;
  width: 613px;
  text-align: left;
  letter-spacing: 0px;
  background-color: rgba(26,26,26,0.8);
  & h1 {
    margin: 0px 0px 29px;
    color: #FFFFFF;
    font-weight: Light;
    font: 60px/81px TT Commons;
  }
  & p {
    margin: 0px;
    color: #CCCCCC;
    font-weight: Regular;
    font: 16px/30px Noto Sans JP Regular;
  }
`
