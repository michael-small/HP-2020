import React from "react"
import styled from "styled-components"
import { withTheme, useTheme } from "@material-ui/core"
import Image from "../image"
import { StyledLink as Link } from "../link"
import { ArrowButton } from "./arrowButton"
import Container from "../container"

export default () => {
  return (
    <Container>
      <WhoText>Who We Are</WhoText>
      <WhoDescription>
        人々に力を与えるはずのテクノロジーが人々から自由とプライバシーを奪っています。ブロックチェーンを始めとする分散化技術は価値のインターネットを可能にし、人々にデータの検証可能性をもたらします。私たちは、集権的なシステムではなくブロックチェーンを始めとする分散化技術によってよりよい社会を実現します。
      </WhoDescription>
      <div align="center" style={{ marginTop: "20px" }}>
        <Link to="/company">
          <ArrowButton label="詳しく見る" color="#1A1A1A" />
        </Link>
      </div>
      <SupportedByText>Supported By</SupportedByText>
      <SupporterArea>
        <SupporterImage filename="parity.png" />
        <SupporterImage filename="web3-foundation.png" />
        <SupporterImage filename="Berkeley.png" />
        <SupporterImage filename="LongHash.png" />
        <SupporterImage filename="CEL.png" />
      </SupporterArea>
    </Container>
  )
}

const WhoText = withTheme(
  styled.h1(
    ({ theme }) => `
  margin-top: 140px;
  text-align: center;
  font: 700 60px/81px TT Commons;
  color: #1a1a1a;
  ${theme.breakpoints.down("xs")} {
    font-size: 40px;
    line-height: 54px;
    margin-top: 80px;
  }
`
  )
)

const WhoDescription = withTheme(
  styled.p(
    ({ theme }) => `
  margin-top: 28px;
  color: #7b7b7b;
  text-align: center;
  font: 16px/30px Noto Sans JP Regular;
  opacity: 1;
  ${theme.breakpoints.down("xs")} {
    font-size: 15px;
    margin-top: 16px;
  }
`
  )
)

const SupportedByText = withTheme(
  styled.h2(
    ({ theme }) => `
  margin-top: 130px;
  color: #1a1a1a;
  text-align: center;
  font: 600 38px/52px TT Commons;
  ${theme.breakpoints.down("xs")} {
    font-size: 26px;
    margin-top: 35px;
  }
`
  )
)

const SupporterArea = withTheme(
  styled.div(
    ({ theme }) => `
  margin-top: 20px;
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${theme.breakpoints.down("xs")} {
    margin-bottom: 80px;
  }
`
  )
)

const SupporterImage = withTheme(
  styled(Image).attrs(props => ({
    objectFit: "contain",
    ...props,
  }))(
    ({ theme }) => `
  && {
    width: 200px;
    height: 100px;
    margin: ${theme.spacing(3)}px;
    ${theme.breakpoints.down("xs")} {
      width: 140px;
      height: 70px;
      margin: ${theme.spacing(1)}px;
    }
  }
`
  )
)
