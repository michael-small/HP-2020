import React from "react"
import styled from "styled-components";
import Background from "../components/background";
import Image from "../components/image";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header filename='video2.png'>
      <HeaderContainer>
        <NavBar>
          <NavItem>Service</NavItem>
          <NavItem>Media</NavItem>
          <NavItem>Company</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>日本語</NavItem>
        </NavBar>
        <Title>Web3.0を実現する。</Title>
        <Desctiption>
        Stake Technologiesはブロックチェーンなどの最先端技術を用い次世代の分散型WebであるWeb3.0、そしてその先に、社会の再分散化を目指すテクノロジー企業です。
        </Desctiption>
      </HeaderContainer>
    </Header>
    <WhoText>Who We Are</WhoText>
    <WhoDescription>
    人々に力を与えるはずのテクノロジーが人々から自由とプライバシーを奪っています。ブロックチェーンを始めとする分散化技術は価値のインターネットを可能にし、データの検証可能性をもたらします。我々は、集権的なシステムではなくブロックチェーンを始めとする分散化技術によってモノや個人をエンパワーメントすることでよりよい社会を実現します。
    </WhoDescription>
    <SupportedByText>Supported By</SupportedByText>
    <SupporterArea>
      <SupporterImage filename='parity.png' style={{width:"100px", height:"100px"}}/>
      <SupporterImage filename='web3-foundation.png' style={{width:"180px", height:"62px"}}/>
      <SupporterImage filename='Berkeley.png' style={{width:"190px", height:"42px"}}/>
      <SupporterImage filename='LongHash.png' style={{width:"204px", height:"48px"}}/>
      <SupporterImage filename='CEL.png' style={{width:"86px", height:"94px"}}/>
    </SupporterArea>
    <WaasBg>
      <WaasContainer filename="service-bg.png">
aaaa
      </WaasContainer>
    </WaasBg>


  </Layout>
)

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

const Header = styled(Background)`
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

const WhoText = styled.div`
  margin-top: 140px;
  text-align: center;
  font: 700 60px/81px TT Commons;
  color: #1A1A1A;
`
const WhoDescription = styled.div`
  margin-top: 28px;
  width: 760px;
  height: 135px;
  margin: 0 auto auto;
  color: #7B7B7B;
  text-align: center;
  font: 16px/30px Noto Sans JP Regular;
  opacity: 1;
`

const SupportedByText = styled.div`
  margin-top: 130px;
  color: #1A1A1A;
  text-align: center;
  font: 600 38px/52px TT Commons;
`

const SupporterArea = styled.div`
  margin-top: 20px;
  height: 110px;
  display: flex;
  justify-content:center;
`

const SupporterImage = styled(Image)`
  && {
    margin-left:60px;
    margin-right: 60px;
  }
`

const WaasBg = styled(Background)`
  && {
    padding-top: 0px;
    width: 100%;
    height: 959px;
  }
`

const WaasContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`


export default IndexPage
