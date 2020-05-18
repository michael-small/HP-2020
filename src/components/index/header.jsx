import React from "react"
import styled from "styled-components"
import NavBar from "../navbar"
import HeaderVideo from "../../images/index/video_light.mp4"
import HeaderImage from "../../images/video2.png"

import Image from "../image"

export default () => {
  return(
    <Wrapper>
    <HeaderContainer>
      <NavBar isTopPage />
      <Title>Web3.0を実現する。</Title>
      <Desctiption>
      Stake Technologiesは、ブロックチェーン技術の利用を中心として、次世代のWebであるWeb3.0の実現を推進していきます。
      誰もが意識することなく、テクノロジーの利便性を公平に享受できるようにすることが私たちの使命です。
      </Desctiption>
    </HeaderContainer>
    <HeaderBackground muted autoPlay loop poster={HeaderImage} >
      <source src={HeaderVideo} type="video/mp4"/>
    </HeaderBackground>
    </Wrapper>
  )
  }

const Title = styled.div`
  margin-top: 275px;
  font: 70px/103px Noto Sans JP Light;
`

const Desctiption = styled.div`
  max-width: 620px;
  // height: 81px;
  margin-top: 26px;
  padding: 0px;
  font: 16px/30px Noto Sans JP Regular;
`

const Wrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0);
  width: 100%;
  max-width: 1440px;
  height: 900px;
  overflow: hidden;
`

const HeaderBackground = styled.video`
  position: absolute;
  overflow: hidden;
  top: 0px;
  left: 0px;
  // right: 0px;
  // bottom: 0px;
  // margin: auto;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  // max-width: inherit;
`
const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px;
  color: #ffffff;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 150px;
`
