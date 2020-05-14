import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { StyledLink as Link } from "../link"

export default () => (<Wrapper>
  <NavLine/>
  <NavLabel to="/service/#products">プロダクト</NavLabel>
  <NavLine/>
  <NavLabel to="/service/#development">プロダクト開発</NavLabel>
  <NavLine/>
  <NavLabel to="/service/#rd">研究開発</NavLabel>
  <NavLine/>
  <NavLabel to="/service/#consulting">技術コンサルティング</NavLabel>
  <NavLine/>
  <NavLabel to="/service/#blog">ブログ</NavLabel>
  <NavLine/>
</Wrapper>)

const Wrapper = styled.div`
  {
    padding-top: 46px;
    padding-bottom: 44px;
    height: 140px;
    background-color: #FFFFFF;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    alint-items: center;
  }
`
const NavLabel = ({children, ...props}) => {
  const NavLabelWrapper = styled.div`
    margin: auto 0;
    height: 40px;
    text-align: center;
    font: 16px/42px Noto Sans JP Regular;
    padding-left: 50px;
    padding-right: 50px;
  `

  return (<Link {...props}>
  <NavLabelWrapper>
    {children}
  </NavLabelWrapper>
  <FontAwesomeIcon style={{fontSize: "14px", display: "block",margin:"0 auto"}} icon={faAngleDown}/>
  </Link>)
}

// const NavLabel = styled.div`
//   margin: auto 0;
//   height: 40px;
//   text-align: center;
//   font: 16px/24px Noto Sans JP Regular;
//   padding-left: 50px;
//   padding-right: 50px;
// `

const NavLine = styled.div`
  margin: 0px;
  margin-bottom: auto;
  height: 40px;
  width: 2px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.3;
`