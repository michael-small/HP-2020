import React from "react"
import styled from "styled-components";
import Image from "../image";

export default () =>(<>
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
</>)

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