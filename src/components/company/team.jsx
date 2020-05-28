import React from "react"
import Image from "../image"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import localTheme from "./theme"
import _Container from "../container"

export default ({ ...props }) => {
  return (
    <Bg>
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
    </Bg>
  )
}

const Bg = styled.div`
  background-color: #1a1a1a;
`

const Container = withTheme(styled(_Container)`
  ${localTheme}
  paddint-bottom: 116px;
  letter-spacing: 0px;
  color: #ffffff;
  width: 100%;
`)

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

const Name = styled.span`
  display: block;
  margin: 5px auto 0px;
  font: inherit;
  color: #ffffff;
`

const Job = styled.span`
  display: block;
  font: inherit;
  color: #9b9b9b;
`
