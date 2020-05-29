import React from "react"
import { withTheme, useMediaQuery, useTheme } from "@material-ui/core"
import Background from "../background"
import Image from "../image"
import styled from "styled-components"
import { ButtonRect, ButtonLabel, ArrowRightIcon } from "../arrowButton"

import ProductCards from "../product-cards"
// import { StyledLink as Link } from "../link"
import Container from "../container"
import { navigate } from "gatsby"

export default () => {
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <WaasWrapper>
      <WaasBg
        filename="service-bg.png"
        style={{
          position: "absolute",
          width: "1535px",
          height: "959px",
          objectPosition: "top left",
        }}
      />
      <WaasContainer>
        <h1>Web3.0 as a Service</h1>
        <ProductCards style={{ marginTop: downXs ? "51px" : "62px" }} />

        <FlexContainer style={{ marginTop: downXs ? "38px" : "74px" }}>
          <ItemImage filename="Development.png" objectFit="contain" />
          <ItemDescription>
            <h1>Development</h1>
            <h2>（プロダクト開発）</h2>
            <p>
              ブロックチェーンのスケーラビリティ問題を解決するプロダクト「Plasm
              Network」、ブロックチェーン技術をビジネスへ実装したい企業向けのシステム開発と提供を中心に実施しています。最新の技術と既存の安定性のある技術を組み合わせて提案をしています。
            </p>
            <ArrowButton to="/service#development" />
          </ItemDescription>
        </FlexContainer>

        <FlexContainer flexDirection="row-reverse">
          <ItemImage filename="RD.png" objectFit="contain" />
          <ItemDescription>
            <h1>R&amp;D</h1>
            <h2>（研究開発）</h2>
            <p>
              ブロックチェーンを中心に処理性能向上技術、秘匿化技術など幅広い領域で研究開発を行っています。
              オープンソースプロジェクトへの参加も積極的に行い世界的にも最先端技術への貢献が認められています。
            </p>
            <ArrowButton to="/service#rd" />
          </ItemDescription>
        </FlexContainer>

        <FlexContainer>
          <ItemImage filename="Consulting.png" objectFit="contain" />
          <ItemDescription>
            <h1>Tech Consulting</h1>
            <h2>（技術コンサルティング）</h2>
            <p>
              自社プロダクトの開発とR&amp;Dで得た知見をもとに、アドバイスや技術論文の説明などを実施しています。
            </p>
            <ArrowButton to="/service#consulting" />
          </ItemDescription>
        </FlexContainer>
      </WaasContainer>
    </WaasWrapper>
  )
}

const ArrowButton = ({ style, to, ...props }) => {
  const theme = useTheme()
  const downXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <ButtonRect
      lang={downXs ? "en" : "ja"}
      width={downXs ? "140px" : "150px"}
      height="46px"
      color="#FFFFFF"
      backgroundColor="rbga(0,0,0,0)"
      style={{
        fontSize: downXs ? "16px" : "15px",
        opacity: 0.7,
        border: "1px solid",
        margin: downXs ? "20px auto 0px" : "30px 0px 0px",
        // ...style,
      }}
      onClick={() => {
        navigate(to)
      }}
      {...props}
    >
      <ButtonLabel style={{ opacity: 1 }}>
        {downXs ? "More Detail" : "詳しく見る"}
        <ArrowRightIcon />
      </ButtonLabel>
    </ButtonRect>
  )
}

const WaasContainer = withTheme(
  styled(Container)`
    position: relative;
    z-index: 10;
    padding-top: 120px;
    padding-bottom: 76px;
    letter-spacing: 0px;
    color: #ffffff;
    width: 100%;
    h1 {
      text-align: center;
      margin: 0px auto 0px;
      font: Bold 50px/67px TT Commons;
    }
    ${props => props.theme.breakpoints.down("xs")} {
      padding-top: 75px;
      padding-bottom: 120px;
      h1 {
        font-size: 34px;
        line-height: 46px;
      }
    }
  `
)

const WaasWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #000000;
`

const WaasBg = styled(Background)`
  background-color: #000000;
`

const FlexContainer = withTheme(
  styled.div(
    props => `
  display: flex;
  min-height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props.flexDirection};
  ${props.theme.breakpoints.down("xs")} {
    display: block;
    padding-left: ${props.theme.spacing(2)}px;
    padding-right: ${props.theme.spacing(2)}px;
  }
`
  )
)

const ItemImage = withTheme(
  styled(Image)(
    props => `
  flex: 4 4 0px;
  max-width: 420px;
  ${props.theme.breakpoints.down("xs")} {
    margin: 0 auto 0;
  }
`
  )
)

const ItemDescription = withTheme(
  styled.div(
    props => `
  flex: 5 5 0px;
  max-width: 680px;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-align: left;
  opacity: 1;
  h1 {
    display: inline;
    margin: 0px;
    padding: 0px;
    text-align: inherit;
    font: 38px/52px TT Commons;
    font-weight: 600;
  }
  h2 {
    display: inline-block;
    margin: 0px;
    padding: 0px;
    font-weight: normal;
    font: 700 22px/30px Noto Sans JP;
  }
  p {
    text-align: left;
    margin-top: 25px;
    font: 16px/30px Noto Sans JP;
    color: #B2B2B2;
  }
  ${props.theme.breakpoints.down("xs")} {
    margin-top: -20px;
    h1{
      font-size: 28px;
      line-height: 38px;
    }
    h2{
      font-size: 15px;
    }
    p{
      font-size: 15px;
      margin-top: 16px;
    }
  }
`
  )
)
