import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Background from "../background";

export default () =>(
<HeaderBackground filename='video2.png'>
  <HeaderContainer>
    <NavBar>
      <NavItem>Service</NavItem>
      <NavItem>Media</NavItem>
      <NavItem>Company</NavItem>
      <NavItem>Contact</NavItem>
      <Line/>
      <NavItem  style={{font:"16px/12px Noto Sans JP Regular", marginTop:"19px"}} >
        <FontAwesomeIcon icon={faGlobe} style={{marginRight:"6px"}}/>日本語
      </NavItem>
    </NavBar>
    <Title>Web3.0を実現する。</Title>
    <Desctiption>
    Stake Technologiesはブロックチェーンなどの最先端技術を用い次世代の分散型WebであるWeb3.0、そしてその先に、社会の再分散化を目指すテクノロジー企業です。
    </Desctiption>
  </HeaderContainer>
</HeaderBackground>
)

const Title = styled.div`
  margin-top: 275px;
  font: 70px/103px Noto Sans JP Light;
`

const Desctiption = styled.div`
  width: 620px;
  height: 81px;
  margin-top: 26px;
  padding: 0px;
  font: 16px/30px Noto Sans JP Regular;
`

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  height:60px;
  padding-right: 150px;
`

const NavItem = styled.div`
  margin: 25px 20px 17px;
  font: 18px/12px TT Commons;
`

const Line = styled.div`
  background-color: #CCCCCC;
  margin: auto 0px;
  height: 21px;
  width: 1px; 
`

const HeaderBackground = styled(Background)`
  && {
    padding-top: 0px;
    width: 1440px;
    height: 900px;
  }
`
const HeaderContainer = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  color: #FFFFFF;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 150px;
`