import React from "react"
// import Image from "../image"
import styled from "styled-components"
import Koushori from "../../images/service/高処理性能.svg"
import Agile from "../../images/service/アジャイル実装.svg"
import Hannyousei from "../../images/service/汎用性.svg"
import Domain from "../../images/service/ドメイン知識.svg"
import { ArrowButton } from "./arrowButton"
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
      <h2>提供価値</h2>
      <FlexContainer>
        <div style={{ margin: "0px 5px 0px" }}>
          <img src={Koushori} width="150px" height="130px" />
          <h3>高処理性能</h3>
        </div>
        <div style={{ margin: "0px 5px 0px" }}>
          <img src={Agile} width="150px" height="130px" />
          <h3>アジャイル実装</h3>
        </div>
      </FlexContainer>
      <ArrowButton
        label="お問い合わせ"
        to="/contact"
        style={{ margin: "53px auto 0px" }}
      />

      <Hr />
      <div id="rd">
        <h1>R&amp;D</h1>
        <h2>（研究開発）</h2>
      </div>
      <p>
        ブロックチェーンを中心に処理性能向上技術、秘匿化技術など幅広い領域で研究開発を行っています。オープンソースプロジェクトへの参加も積極的に行い世界的にも最先端技術への貢献が認められています。
      </p>
      <h2>提供価値</h2>

      <FlexContainer>
        <div style={{ margin: "0px 5px 0px", width: "150px" }}>
          <img src={Koushori} width="150px" height="130px" />
          <h3>処理性能の改善</h3>
        </div>
        <div style={{ margin: "0px 5px 0px", width: "150px" }}>
          <img src={Agile} width="150px" height="130px" />
          <h3>秘匿化</h3>
        </div>
      </FlexContainer>
      <ArrowButton
        label="お問い合わせ"
        to="/contact"
        style={{ margin: "53px auto 0px" }}
      />
      <Hr />

      <div id="consulting">
        <h1>Consulting</h1>
        <h2>（技術コンサルティング）</h2>
      </div>
      <p>
        自社プロダクトの開発とR&amp;Dで得た知見をもとに、アドバイスや技術論文の説明などを実施しています。
      </p>
      <h2>提供価値</h2>
      <FlexContainer>
        <div style={{ margin: "0px 5px 0px", width: "150px" }}>
          <img src={Domain} width="150px" height="130px" />
          <h3>ブロックチェーンのドメイン知識</h3>
        </div>
        <div style={{ margin: "0px 5px 0px", width: "150px" }}>
          <img src={Hannyousei} width="150px" height="130px" />
          <h3>汎用性</h3>
        </div>
      </FlexContainer>
      <ArrowButton
        label="お問い合わせ"
        to="/contact"
        style={{ margin: "53px auto 0px" }}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 117px 150px 83px;
  background-color: #FFFFF;
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
  & h1 {
    display: inline;
    text-align: center;
    margin: 0px auto 0px;
    font: Bold 60px/81px TT Commons;
    font-weight: Bold;
  }
  & h2 {
    display: inline;
    text-align: center;
    margin: 0px auto 0px;
    font: 30px/45px Noto Sans JP Bold;
  }
  & h3 {
    text-align: center;
    margin: 0px;
    font: 16px/30px Noto Sans JP Regular;
  }
  & p {
    text-align: left;
    margin: 27px 0px 59px;
    color: #7b7b7b;
    font: 16px/30px Noto Sans JP Regular;
  }
`

const FlexContainer = styled.div`
  display: flex;
  margin-top: 17px;
  margin-right: -5px;
`

const Hr = styled.div`
  margin-top: 83px;
  margin-bottom: 100px;
  width: 100%;
  height: 0px;
  border: 1px solid #cccccc;
  opacity: 1;
`
