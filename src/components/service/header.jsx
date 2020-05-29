import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import Image from "../image"
import Container from "../container"

export default () => (
  <HeaderWrapper>
    <HeaderBackground
      filename="service/bg.jpg"
      style={{ position: "absolute" }}
    />
    <HeaderContainer>
      <HeaderContent>
        <h1>Web3.0 as a Service</h1>
        <p>
          Web1.0とは読むことのできるWeb。Web2.0とは現在私たちが使用しているような動的な読み書きができる対話型のWebです。ブロックチェーンのような分散化技術によってWeb3.0が新たに手にするものは信頼と検証可能性です。それはインターネットとWebをより分権し検証可能にし安全にします。Web3.0は幅広いムーブメントでありそれに関わる技術と人々の挑戦です。私たちは、ブロックチェーンと分散化技術を用いサービスを提供することで未来に挑戦しています。
        </p>
      </HeaderContent>
    </HeaderContainer>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0);
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
`

const HeaderBackground = styled(Image).attrs(props => ({
  objectFit: "cover",
  objectPosition: "bottom right",
  loading: "eager",
  ...props,
}))({
  width: "100%",
  height: "100%",
})

const HeaderContainer = styled(Container)`
  overflow: hidden;
  width: 100%;
`

const HeaderContent = withTheme(
  styled.div(
    props => `
  position: relative;
  margin-left: 0px;
  max-width: 613px;
  text-align: left;
  letter-spacing: 0px;
  background-color: rgba(26, 26, 26, 0.8);
  & h1 {
    margin-top: 25vh;
    color: #ffffff;
    font: 300 60px/81px TT Commons;
  }
  & p {
    margin-top: 29px;
    color: #cccccc;
    font: 16px/30px Noto Sans JP;
  }
  ${props.theme.breakpoints.down("xs")} {
    margin-top: 84px ;
    & h1 {
      font-size: 38px;
      line-height: 52px;
      margin-top: 84px;
    }
    & p{
      margin-top: 19px;
    }
  }
`
  )
)
