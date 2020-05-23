import React from "react"
import styled from "styled-components"
import BePassionateSVG from "../../images/company/be-passionate.svg"
import BeGlobalSVG from "../../images/company/be-global.svg"

export default ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Core Value</h1>
      <FlexConteiner>
        <FlexItem>
          <img
            src={BePassionateSVG}
            width={200}
            height={230}
            style={{ display: "block", margin: "0 auto 0" }}
          />
          <h2>Be Passionate</h2>
          <h3>熱狂的であれ</h3>
        </FlexItem>
        <FlexItem>
          <img
            src={BeGlobalSVG}
            width={200}
            height={230}
            style={{ display: "block", margin: "0 auto 0" }}
          />
          <h2>Be Global</h2>
          <h3>グローバルマインドセットを持とう</h3>
        </FlexItem>
      </FlexConteiner>
    </Container>
  )
}

const Container = styled.div`
  padding: 134px 80px 80px;
  letter-spacing: 0px;
  color: #1a1a1a;
  width: 100%;
  h1 {
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
  white-space: nowrap;

  margin: 36px auto 0px;
  h2 {
    text-align: center;
    margin: 25px -50% 0px;
    font: 38px/52px TT Commons;
    font-weight: 600;
  }
  h3 {
    text-align: center;
    margin: 0px -50% 0px;
    font: 16px/23px Noto Sans JP Regular;
    font-weight: Bold;
    color: #7b7b7b;
  }
`

const FlexItem = styled.div`
  margin 0px 70px 49px;
  width: 200px;
  overflow-x: visible;
`
