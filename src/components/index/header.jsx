import React from "react"
import styled from "styled-components"
import NavBar from "../navbar"
import Container from "../container"
import HeaderVideo from "../../images/index/video_480.mp4"
import { isMobile } from "react-device-detect"
import useComponentSize from "@rehooks/component-size"
// import HeaderImage from "../../images/video2.png"
import { withTheme } from "@material-ui/core"
import Image from "../image"

export default () => {
  const headerHeightRef = React.useRef(null)
  let size = useComponentSize(headerHeightRef)

  return (
    <HeaderWrapper height={size.height}>
      {isMobile ? (
        <Image
          filename="video2.png"
          style={{
            width: "100%",
            height: "100%",
          }}
          objectFit="cover"
          objectPosition="top right"
          loading="eager"
        />
      ) : (
        <HeaderBackground muted autoPlay loop playsInline>
          <source src={HeaderVideo} type="video/mp4" />
        </HeaderBackground>
      )}
      <HeaderBackgroundFilter>
        <div ref={headerHeightRef}>
          <NavBar isTopPage />
          <HeaderContainer>
            <h1>Web3.0を実現する。</h1>
            <p>
              Stake
              Technologiesは、ブロックチェーン技術の利用を中心として、次世代のWebであるWeb3.0の実現を推進していきます。
              誰もが意識することなく、テクノロジーの利便性を公平に享受できるようにすることが私たちの使命です。
            </p>
          </HeaderContainer>
        </div>
      </HeaderBackgroundFilter>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0);
  width: 100%;
  height: ${props => (props.height ? props.height + "px" : "100vh")};
  min-height: 100vh;
  overflow: hidden;
`

const HeaderBackground = styled.video`
  position: absolute;
  overflow: hidden;
  top: 0px;
  right: 0px;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  // max-width: inherit;
`

const HeaderBackgroundFilter = styled.div`
  position: absolute;
  overflow: hidden;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const HeaderContainer = withTheme(styled(Container)`
  h1 {
    display: block;
    margin-top: 27vh;
    font: 70px/103px Noto Sans JP Light;
  }
  p {
    max-width: 620px;
    margin-top: 26px;
    font: 16px/30px Noto Sans JP Regular;
  }
  ${props => props.theme.breakpoints.down("sm")} {
    h1 {
      font-size: 56px;
      line-height: 70px;
    }
  }
  ${props => props.theme.breakpoints.down("xs")} {
    h1 {
      font-size: 32px;
      line-height: 47px;
      text-align: center;
      margin-left: 0.5em;
    }
    p {
      font-size: 15px;
      line-height: 30px;
      text-align: center;
    }
  }
  width: 100%;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  padding-bottom: 100px;
  letter-spacing: 0px;
  text-align: left;
`)
