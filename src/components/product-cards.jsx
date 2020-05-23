import React from "react"
import Image from "./image"
import styled from "styled-components"
// import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "./card"

export default ({ ...props }) => {
  return (
    <CardContainer {...props}>
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
            filename="stake-logo.png"
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
  )
}
