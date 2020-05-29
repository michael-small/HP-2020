import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core"
import Image from "../image"
import Container from "../container"

export default () => (
  <HeaderWrapper>
    <HeaderBackground filename="career/career_header.jpg" />
    <HeaderBackgroundFilter>
      <HeaderContainer>
        <HeaderContent>
          <h1>Join Our Team</h1>
          <p>
            私たちはブロックチェーンを活用し次世代のWebであるWeb3.0を実現するために、世界中から最高峰の人材を募集しています。未来に挑戦する新たな仲間のエントリーをお待ちしております。
          </p>
        </HeaderContent>
      </HeaderContainer>
    </HeaderBackgroundFilter>
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
  loading: "eager",
  ...props,
}))({
  width: "100%",
  height: "100%",
})

const HeaderBackgroundFilter = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const HeaderContainer = styled(Container)`
  overflow: hidden;
  width: 100%;
`

const HeaderContent = withTheme(
  styled.div(
    props => `
  position: relative;
  max-width: 613px;
  text-align: left;
  letter-spacing: 0px;
  & h1 {
    margin-top: 25vh;
    margin-left: 0.2em;
    color: #FFFFFF;
    font: 60px/81px TT Commons Light;
  }
  & p {
    margin-top: 35px;
    color: #FFFFFF;
    font: 18px/30px Noto Sans JP Regular;
  }
  ${props.theme.breakpoints.down("xs")} {
    margin-top: 84px ;
    & h1 {
      text-align: center;
      font-size: 40px;
      line-height: 54px;
      margin-top: 195px;
      margin-left: 0px;
    }
    & p{
      margin-top: 29px;
      font-size: 15px;
    }
  }
`
  )
)
