import React from "react"
// import Image from "../image"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import _Container from "../container"
import Koushori from "../../images/service/高処理性能.svg"
import Agile from "../../images/service/アジャイル実装.svg"
import Hannyousei from "../../images/service/汎用性.svg"
import Domain from "../../images/service/ドメイン知識.svg"
import localTheme from "./theme"
import ArrowButton from "../arrowButton"
// import { ArrowButton } from "./arrowButton"
// import { StyledLink as Link } from "../link"
// import { CardContainer,Card, CardContent, Logo } from "../index/card"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <div id="development">
        <h1>Development</h1>
        <h2>（プロダクト開発）</h2>
      </div>
      <p>
        ブロックチェーンのスケーラビリティ問題を解決するプロダクト「Plasm
        Network」、ブロックチェーン技術をビジネスへ実装したい企業向けのシステム開発と提供を中心に実施しています。最新の技術と既存の安定性のある技術を組み合わせて提案をしています。
      </p>
      <h3>提供価値</h3>
      <FlexContainer>
      <FlexItem>
          <img src={Koushori} width="100%" />
          <h4>高処理性能</h4>
          </FlexItem>
          <FlexItem>
          <img src={Agile} width="100%"/>
          <h4>アジャイル実装</h4>
          </FlexItem>
      </FlexContainer>
      <ArrowButton
        label="お問い合わせ"
        to="/contact"
        style={{ margin: "53px auto 0px", maxWidth: "100%" }}
      />

      <Hr />
      <div id="rd">
        <h1>R&amp;D</h1>
        <h2>（研究開発）</h2>
      </div>
      <p>
        ブロックチェーンを中心に処理性能向上技術、秘匿化技術など幅広い領域で研究開発を行っています。
        オープンソースプロジェクトへの参加も積極的に行い世界的にも最先端技術への貢献が認められています。
      </p>
      <h3>提供価値</h3>

      <FlexContainer>
      <FlexItem>
          <img src={Koushori} width="100%" />
          <h4>処理性能の改善</h4>
          </FlexItem>
          <FlexItem>
          <img src={Agile} width="100%" />
          <h4>秘匿化</h4>
          </FlexItem>
      </FlexContainer>
      <ArrowButton
        label="お問い合わせ"
        to="/contact"
        style={{ margin: "53px auto 0px", maxWidth: "100%" }}
      />
      <Hr />

      <div id="consulting">
        <h1>Tech Consulting</h1>
        <h2>（技術コンサルティング）</h2>
      </div>
      <p>
        自社プロダクトの開発とR&amp;Dで得た知見をもとに、アドバイスや技術論文の説明などを実施しています。
      </p>
      <h3>提供価値</h3>
      <FlexContainer>
        <FlexItem>
          <img src={Domain} width="100%" />
          <h4>ブロックチェーンのドメイン知識</h4>
          </FlexItem>
        <FlexItem>
          <img src={Hannyousei} width="100%" />
          <h4>汎用性</h4>
        </FlexItem>
      </FlexContainer>
      <ArrowButton
        label="お問い合わせ"
        to="/contact"
        style={{ margin: "53px auto 0px", maxWidth: "100%" }}
      />
    </Container>
  )
}

const Container = withTheme(styled(_Container)`
  ${localTheme}
  padding-bottom: 128px;
  background-color: #FFFFFF;
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
`
)

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 17px;
  margin-right: -5px;
  margin-bottom: -5px;
`

const FlexItem = styled.div`
  margin: 0px 5px 5px;
  width: 150px;
  max-width: 100%;
`

const Hr = withTheme(styled.div`
  margin-top: 83px;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  width: 100vw;
  height: 0px;
  border: 1px solid #cccccc;
  opacity: 1;
  ${props=>props.theme.breakpoints.down("xs")} {
    margin-top: 58px;
  }
`)
