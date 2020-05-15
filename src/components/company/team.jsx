import React from "react"
import Image from "../image"
import styled from "styled-components"
import { StyledLink as Link } from "../link"
import { CardContainer, Card, CardContent, Logo } from "../index/card"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Teams</h1>
      <FlexConteiner>
        <FlexItem>
          <Image
            filename="1_-Sota-Watanabe_CEO.jpg"
            style={{ width: 204, height: 204 }}
          />
          <Name>Sota Watanabe</Name>
          <Job>CEO</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="2_Takumi-Yamashita_CTO.jpg"
            style={{ width: 204, height: 204 }}
          />
          <Name>Takumi Yamashita</Name>
          <Job>CTO</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="3_Masaharu-Uno_COO.jpg"
            style={{ width: 204, height: 204 }}
          />
          <Name>Masaharu Uno</Name>
          <Job>COO</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="4_Task-Ohmori_Core-Developer.jpg"
            style={{ width: 204, height: 204 }}
          />
          <Name>Task Ohmori</Name>
          <Job>Core Developer</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="5_-Alexandr-Krupenkin.png"
            style={{ width: 204, height: 204 }}
          />
          <Name>Alexsandr Krupenkin</Name>
          <Job>Software Engineer</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="6_-Yoshinobu-Shijo.png"
            style={{ width: 204, height: 204 }}
          />
          <Name>Yoshinobu Shijo</Name>
          <Job>Product Manager</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="7_Hoon-Kim_Software-Engineer.jpg"
            style={{ width: 204, height: 204 }}
          />
          <Name>Hoon Kim</Name>
          <Job>Software Engineer</Job>
        </FlexItem>
        <FlexItem>
          <Image
            filename="8_-Tomomasa-Matsunaga.png"
            style={{ width: 204, height: 204 }}
          />
          <Name>Tomomasa Matsunaga</Name>
          <Job>Software Engineer</Job>
        </FlexItem>
      </FlexConteiner>
    </Container>
  )
}

const Container = styled.div`
  padding: 92px 200px 116px;
  background-color: #1a1a1a;
  letter-spacing: 0px;
  color: #ffffff;
  width: 100%;
  & h1 {
    text-align: center;
    margin: 0px auto 0px;
    font: 60px/81px TT Commons;
    font-weight: Bold;
  }
`

const FlexConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  margin: 49px auto 0px;
  font: 20px/27px TT Commons;
  font-weight: 500;
`

const FlexItem = styled.div`
  margin 0px 27px 49px;
  text-align: left;
`

const Name = styled.p`
  margin: 5px auto 0px;
  font: inherit;
  color: #ffffff;
`

const Job = styled.p`
  font: inherit;
  color: #9b9b9b;
`
