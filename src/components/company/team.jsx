import React from "react"
import Image from "../image"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import localTheme from "./theme"
import _Container from "../container"

const Introductions = [
  {
    filename:"1_-Sota-Watanabe_CEO.jpg",
    name:"Sota Watanabe",
    job:"CEO",
    description:"",
  },
  {
    filename:"2_Takumi-Yamashita_CTO.jpg",
    name:"Takumi Yamashita",
    job:"CTO",
    description:"",
  },
  {
    filename:"3_Masaharu-Uno_COO.jpg",
    name:"Masaharu Uno",
    job:"COO",
    description:"",
  },
  {
    filename:"4_Task-Ohmori_Core-Developer.jpg",
    name:"Task Ohmori",
    job:"Core Developer",
    description:"",
  },
  {
    filename:"5_-Alexandr-Krupenkin.png",
    name:"Alexandr Krupenkin",
    job:"Software Engineer",
    description:"",
  },
  {
    filename:"6_-Yoshinobu-Shijo.png",
    name:"Yoshinobu Shijo",
    job:"Product Manager",
    description:"",
  },
  {
    filename:"7_Hoon-Kim_Software-Engineer.jpg",
    name:"Hoon Kim",
    job:"Software Engineer",
    description:"",
  },
  {
    filename:"8_-Tomomasa-Matsunaga.png",
    name:"Tomomoasa Matsunaga",
    job:"Software Engineer",
    description:"",
  }
]

export default ({ ...props }) => {
  return (
    <Bg>
      <Container {...props}>
        <h1>Teams</h1>
        <FlexConteiner>
          {Introductions.map((item,index)=>{
            return <FlexItem key={index}>
              <Image
                filename={item.filename}
                style={{ width: 204, height: 204 }}
              />
              <Name>{item.name}</Name>
              <Job>{item.job}</Job>
            </FlexItem>
          })}
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
