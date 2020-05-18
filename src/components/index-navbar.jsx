import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { StyledLink as Link } from "./link"

/*
[
  {
    to:"/service/#products",
    label:"プロダクト",
  },
  ...
]
*/

export default ({labels, ...props}) => {
  if(!!labels) return (
  <div style={{overflow: "scroll"}}>
  <Wrapper>
  {/* <NavLine/> */}
    {labels.map((item,index)=>(<>
      <NavLabel to={item.to} key={index}>{item.label}</NavLabel>
      {/* <NavLine /> */}
    </>))}
  </Wrapper>
  </div>

  )
}

const Wrapper = styled.div`
   {
    width: calc(100% - 50px);
    padding-top: 46px;
    padding-bottom: 44px;
    min-height: 140px;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: safe center;
    alint-items: center;
  }
`
const NavLabel = ({ children, ...props }) => {
  const NavLabelWrapper = styled.div`
    white-space: nowrap;
    margin: 10px 0px 0px -2px;
    height: 30px;
    text-align: center;
    font: 16px/16px Noto Sans JP Regular;
    padding-left: 50px;
    padding-right: 50px;
    border-left: solid 2px #A0A0A0;
    border-right: solid 2px #A0A0A0;

  `

  return (
    <Link {...props}>
      <NavLabelWrapper>{children}</NavLabelWrapper>
      <FontAwesomeIcon
        style={{ fontSize: "14px", display: "block", margin: "0 auto" }}
        icon={faAngleDown}
      />
    </Link>
  )
}

// const NavLabel = styled.div`
//   margin: auto 0;
//   height: 40px;
//   text-align: center;
//   font: 16px/16px Noto Sans JP Regular;
//   padding-left: 50px;
//   padding-right: 50px;
// `