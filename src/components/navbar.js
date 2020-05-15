/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import StakeLogo from "../images/logo-slim.svg" 
import { StyledLink as Link } from "./link"
import { navigate } from "gatsby"

const NavBar = ({isTopPage}) => {
  return (<Wrapper isTopPage={isTopPage}>
    {!isTopPage
    ?<Link to="/" style={{display:"block",width:"250px",height:"49px",margin:"auto 0 auto"}}><img src={StakeLogo} /></Link>
    :[]}
    <FlexEnd>
      <NavItem><Link to="/service">Service</Link></NavItem>
      <NavItem><Link to="/media">Media</Link></NavItem>
      <NavItem><Link to="/company">Company</Link></NavItem>
      <NavItem><Link to="/career">Career</Link></NavItem>
      <NavItem><Link to="/contact">Contact</Link></NavItem>
      <Line />
      <NavItem style={{minWidth:74}}>
        <FontAwesomeIcon icon={faGlobe} style={{ marginTop: -4, fontSize: 15, marginRight: "6px" }} />
        English
      </NavItem>
      </FlexEnd>
  </Wrapper>
  )
}

const FlexEnd = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  padding-left: 150px;
  padding-right: 150px;
  letter-spacing: 0px;
  overflow: scroll;
  opacity: 1;
  ${props=>(props.isTopPage
  ?`color: #FFFFFF;`
  
  :`background: #FFFFFF 0% 0% no-repeat padding-box;
    color: #1A1A1A;`
  )};
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

export default NavBar;
