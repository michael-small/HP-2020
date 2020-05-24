import React from "react"
import Image from "../image"
import _Container from "../container"
import Background from "../background"
import styled from "styled-components"
import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "../card"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <Image
        filename="company/vision.png"
        style={{
          position: "absolute",
          width: "700px",
          height: "auto",
          bottom: "0px",
          right: "0px",
          opacity: 0.4,
        }}
      />

      <h1>Vision</h1>
      <h2>Web3.0を実現する</h2>
      <p>
        インターネットが普及して30年、今のインターネットは極度に中央集権的に管理されています。
        我々がインターネットを経由してサービスを使うたびに我々のデータはコピーされサービスプロバイダーによって管理されています。
        人々に力を与えるテクノロジーが人々から自由とプライバシーを奪っています。
        <br />
        <br />
        我々はエッジが力を持つ分散型のWeb、つまりWeb3.0を実現しもう一度システムを再構築することを目指します。
        技術は本当に世の中に浸透すると、誰も技術の存在を意識しなくなるものです。
        技術そのものを知らなくてもブロックチェーンとWeb3.0が世の中に浸透すればそれが「当たり前のもの」になります。
        誰もが「当たり前に」テクノロジーの恩恵を正しく得られるようになります。我々は不可逆な変化を起こし、そんな変化を最前線で作っていきたいと考えています。
      </p>
    </Container>
  )
}

const Container = styled(_Container)`
  position: relative;
  background-color: #F5F5F5;
  padding-top: 110px;
  padding-bottom: 129px; 
  letter-spacing: 0px;
  background-color:
  color: #1A1A1A;
  width: 100%;
  & h1{
    text-align: center;
    margin: 0px auto 0px;
    font: Bold 60px/81px TT Commons;
    font-weight: Bold;
  }
  & h2{
    text-align: left;
    margin: 54px auto 0px;
    font: 35px/52px Noto Sans JP Bold;
  }
  & p{
    text-align: left;
    max-width: 630px;
    margin: 38px 0px 0px;
    font: 16px/30px Noto Sans JP Regular;
    color: #7B7B7B;
  }
`
