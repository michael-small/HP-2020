import React from "react"
import Image from "../image"
import styled from "styled-components"
import { ArrowButton } from "./arrowButton"
import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "../index/Card"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Products</h1>
      <CardContainer>
        <Card>
          <Image
            filename="plasm-logo-mark.png"
            style={{
              position: "absolute",
              width: "100px",
              top: "47px",
              left: "0px",
              right: "0px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Logo color="#196DC2">PLASM</Logo>
            Polkadotに接続するトランザクションの高速処理に特化した国産ブロックチェーン
          </CardContent>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              filename="Substrate.png"
              style={{
                width: "114px",
              }}
            />
            <Image
              filename="Substrate.png"
              style={{
                width: "114px",
              }}
            />
          </div>
          <CardContent>
            <Logo>SESP</Logo>
            ブロックチェーンを構築するフレームワークであるSubstrateを用いた実証実験・商用開発のパッケージ
          </CardContent>
        </Card>
        <Card>
          <Image
            filename="coming-soon.png"
            style={{
              position: "absolute",
              width: "260px",
              top: "10px",
              left: "0px",
              right: "0px",
              margin: "auto",
              opacity: "0.2",
            }}
          />
          <CardContent>
            <Logo>&nbsp;</Logo>
            Product Coming Soon
          </CardContent>
        </Card>
      </CardContainer>
      <Link to="/contact">
        <ArrowButton label="お問い合わせ" style={{ margin: "50px auto 0px" }} />
      </Link>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 110px;
  padding-bottom: 106px;
  background-color: #f5f5f5;
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
  & h1 {
    text-align: center;
    margin: 0px auto 0px;
    font: Bold 60px/81px TT Commons;
    font-weight: Bold;
  }
`
