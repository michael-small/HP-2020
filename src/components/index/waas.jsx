import React from "react"
import Background from "../background"
import Image from "../image"
import styled from "styled-components"
import { ArrowButton } from "./arrowButton"
import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "./card"

export default () => {
  return (
    <>
      <WaasContainer>
        <WaasBg
          filename="service-bg.png"
          style={{
            backgroundSize: "1535px 959px",
            backgroundPosition: "top left 0px",
          }}
        >
          <h1>Web3.0 as a Service</h1>
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
                Polkadotに接続するトランザクションの高速処理に特化した日本発ブロックチェーン
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
                ブロックチェーン技術利用のための仕様策定から開発、運用を行うパッケージ
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
          <div style={{ marginTop: "-25px", position: "relative" }}>
            <div
              style={{
                marginTop: "74px",
                height: "420px",
                display: "flex",
                overflow: "show",
                flexWrap: "nowrap",
              }}
            >
              <Image
                filename="Development.png"
                style={{
                  marginTop: "0px",
                  marginLeft: "122px",
                  minWidth: "420px",
                  height: "420px",
                  overflow: "show",
                }}
              />
              <ItemDescription
                style={{ marginTop: "87px", marginRight: "220px" }}
              >
                <h1>Development</h1>
                <h2>（プロダクト開発）</h2>
                <p>
                  ブロックチェーンのスケーラビリティ問題を解決するプロダクト「Plasm Network」、ブロックチェーン技術をビジネスへ実装したい企業向けのシステム開発と提供を中心に実施しています。最新の技術と既存の安定性のある技術を組み合わせて提案をしています。
                </p>
                <Link to="/service#development">
                  <ArrowButton
                    lang="ja"
                    label="詳しく見る"
                    color="#FFFFFF"
                    style={{ marginTop: "30px" }}
                  />
                </Link>
              </ItemDescription>
            </div>

            <div
              style={{
                marginTop: "-77px",
                height: "420px",
                display: "flex",
                overflow: "show",
              }}
            >
              <ItemDescription
                style={{
                  marginTop: "87px",
                  marginLeft: "220px",
                  marginRight: "auto",
                }}
              >
                <h1>R&amp;D</h1>
                <h2>（研究開発）</h2>
                <p>
                  ブロックチェーンを中心に処理性能向上技術、秘匿化技術など幅広い領域で研究開発を行っています。
                  オープンソースプロジェクトへの参加も積極的に行い世界的にも最先端技術への貢献が認められています。
                </p>
                <Link to="/service#rd">
                  <ArrowButton
                    lang="ja"
                    label="詳しく見る"
                    color="#FFFFFF"
                    style={{ marginTop: "30px" }}
                  />
                </Link>
              </ItemDescription>
              <Image
                filename="RD.png"
                style={{
                  marginTop: "0px",
                  marginRight: "122px",
                  marginLeft: "auto",
                  minWidth: "420px",
                  height: "420px",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "-77px",
                width: "100%",
                height: "420px",
                display: "flex",
                overflow: "show",
              }}
            >
              <Image
                filename="Consulting.png"
                style={{
                  marginTop: "0px",
                  marginLeft: "122px",
                  minWidth: "420px",
                  height: "420px",
                }}
              />
              <ItemDescription
                style={{ marginTop: "87px", marginRight: "220px" }}
              >
                <h1>Tech Consulting</h1>
                <h2>（技術コンサルティング）</h2>
                <p>
                自社プロダクトの開発とR&amp;Dで得た知見をもとに、アドバイスや技術論文の説明などを実施しています。
                </p>
                <Link to="/service#consulting">
                  <ArrowButton
                    lang="ja"
                    label="詳しく見る"
                    color="#FFFFFF"
                    style={{ marginTop: "30px" }}
                  />
                </Link>
              </ItemDescription>
            </div>
          </div>
        </WaasBg>
      </WaasContainer>
    </>
  )
}

const WaasContainer = styled.div`
  margin-top: 160px;
  // min-height: 1800px;
  padding-bottom: 76px;
  background-color: #000000;
  letter-spacing: 0px;
  color: #ffffff;
  width: 100%;
  & h1 {
    text-align: center;
    margin: 0px auto 0px;
    font: Bold 50px/67px TT Commons;
  }
`

// const WaasBg = styled.div`
//   padding-top: 120px;
// `

const WaasBg = styled(Background)`
  && {
    padding-top: 120px;
    background-color: #000000;
  }
`

const ItemDescription = styled.div`
  width: 680px;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-align: left;
  opacity: 1;
  & h1{
    display: inline;
    margin: 0px;
    padding: 0px;
    text-align: inherit;
    <font:600></font:600> 38px/52px TT Commons;
  }
  & h2{
    display: inline-block;
    margin: 0px;
    padding: 0px;
    font-weight: Regular;
    font: 22px/30px Noto Sans JP Bold;
  }
  & p{
    text-align: left;
    margin-top: 25px;
    font: 16px/30px Noto Sans JP Regular;
    color: #B2B2B2;
  }
`

// const Description = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   right: 0px;
//   bottom: 0px;
//   padding-top: 120px;
//   letter-spacing: 0px;
//   color: #FFFFFF;
//   opacity: 1;
//   & h1{
//     text-align: center;
//     margin: 0px auto 0px;
//     font: Bold 50px/67px TT Commons;
//   }
// `
